export class TooltipManager {
  private static instance: TooltipManager | null = null;
  private tooltipEl: HTMLElement;
  private textEl: HTMLElement;
  private arrowEl: HTMLElement;
  private showTimeout: number | null = null;
  private currentTarget: HTMLElement | null = null;

  public static init(): TooltipManager {
    if (!TooltipManager.instance) {
      TooltipManager.instance = new TooltipManager();
    }
    return TooltipManager.instance;
  }

  constructor() {
    this.tooltipEl = document.createElement('div');
    this.tooltipEl.className = 'nova-tooltip tox-tooltip placement-bottom';
    this.tooltipEl.id = 'stack-editor-tooltip';

    this.textEl = document.createElement('div');
    this.textEl.className = 'nova-tooltip-body';

    this.arrowEl = document.createElement('div');
    this.arrowEl.className = 'nova-tooltip-arrow';

    this.tooltipEl.appendChild(this.arrowEl);
    this.tooltipEl.appendChild(this.textEl);
    document.body.appendChild(this.tooltipEl);

    this.bindGlobalEvents();
  }

  private bindGlobalEvents(): void {
    // Intercept mouseover on any element with title or data-tooltip
    document.addEventListener(
      'mouseover',
      (e) => {
        const target = (e.target as HTMLElement)?.closest?.(
          'button, .nova-btn, .nova-menu-btn, .nova-source-btn, .nova-source-btn-icon, [data-tooltip], [title]'
        ) as HTMLElement | null;

        if (!target) {
          this.hide();
          return;
        }

        // Extract tooltip text from title or data-tooltip
        let text = target.getAttribute('data-tooltip');
        if (!text && target.hasAttribute('title')) {
          text = target.getAttribute('title') || '';
          target.setAttribute('data-tooltip', text);
          target.removeAttribute('title'); // Prevent native browser tooltip from showing!
        }

        if (!text || text.trim() === '') {
          this.hide();
          return;
        }

        this.currentTarget = target;
        if (this.showTimeout) clearTimeout(this.showTimeout);

        this.showTimeout = window.setTimeout(() => {
          if (this.currentTarget === target) {
            this.show(target, text!);
          }
        }, 120);
      },
      true
    );

    document.addEventListener(
      'mouseout',
      (e) => {
        const target = e.target as HTMLElement;
        if (target === this.currentTarget || target.contains(this.currentTarget)) {
          this.hide();
        }
      },
      true
    );

    // Hide immediately on clicks, mousedown, or wheel/scroll
    document.addEventListener('mousedown', () => this.hide(), true);
    document.addEventListener('click', () => this.hide(), true);
    window.addEventListener('scroll', () => this.hide(), true);
  }

  public show(target: HTMLElement, text: string): void {
    this.textEl.textContent = text;
    this.tooltipEl.classList.remove('is-visible');

    const targetRect = target.getBoundingClientRect();
    if (targetRect.width === 0 && targetRect.height === 0) return;

    // Measure tooltip size
    this.tooltipEl.style.left = '0px';
    this.tooltipEl.style.top = '0px';
    this.tooltipEl.style.visibility = 'hidden';
    this.tooltipEl.style.display = 'flex';

    const tooltipRect = this.tooltipEl.getBoundingClientRect();

    let left = targetRect.left + (targetRect.width / 2) - (tooltipRect.width / 2);
    let top = targetRect.bottom + 6;
    let placement = 'placement-bottom';

    // Viewport overflow boundary checks
    if (left < 6) {
      left = 6;
    } else if (left + tooltipRect.width > window.innerWidth - 6) {
      left = window.innerWidth - tooltipRect.width - 6;
    }

    // If bottom overflow, place on top
    if (top + tooltipRect.height > window.innerHeight - 6) {
      top = targetRect.top - tooltipRect.height - 6;
      placement = 'placement-top';
    }

    this.tooltipEl.className = `nova-tooltip tox-tooltip ${placement}`;
    this.tooltipEl.style.left = `${Math.round(left)}px`;
    this.tooltipEl.style.top = `${Math.round(top)}px`;
    this.tooltipEl.style.visibility = 'visible';

    // Position arrow relative to target center
    const targetCenterX = targetRect.left + (targetRect.width / 2);
    const arrowLeft = Math.max(8, Math.min(targetCenterX - left - 5, tooltipRect.width - 18));
    this.arrowEl.style.left = `${Math.round(arrowLeft)}px`;

    // Trigger smooth fade animation
    requestAnimationFrame(() => {
      this.tooltipEl.classList.add('is-visible');
    });
  }

  public hide(): void {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
    this.currentTarget = null;
    this.tooltipEl.classList.remove('is-visible');
    this.tooltipEl.style.display = 'none';
  }

  public destroy(): void {
    this.hide();
    this.tooltipEl.remove();
    TooltipManager.instance = null;
  }
}
