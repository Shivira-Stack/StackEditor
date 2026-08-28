import json
import re

with open('scratch_parsed_items.json', 'r', encoding='utf-8') as f:
    items = json.load(f)

def clean_to_latex(name, raw, section):
    s = raw.strip()
    
    # Common replacements
    s = s.replace('×', '\\times ')
    s = s.replace('÷', '\\div ')
    s = s.replace('±', '\\pm ')
    s = s.replace('∓', '\\mp ')
    s = s.replace('≠', '\\neq ')
    s = s.replace('≈', '\\approx ')
    s = s.replace('≤', '\\leq ')
    s = s.replace('≥', '\\geq ')
    s = s.replace('√', '\\sqrt')
    s = s.replace('π', '\\pi ')
    s = s.replace('θ', '\\theta ')
    s = s.replace('α', '\\alpha ')
    s = s.replace('β', '\\beta ')
    s = s.replace('γ', '\\gamma ')
    s = s.replace('δ', '\\delta ')
    s = s.replace('Δ', '\\Delta ')
    s = s.replace('ε', '\\varepsilon ')
    s = s.replace('λ', '\\lambda ')
    s = s.replace('μ', '\\mu ')
    s = s.replace('ρ', '\\rho ')
    s = s.replace('σ', '\\sigma ')
    s = s.replace('Σ', '\\sum ')
    s = s.replace('ω', '\\omega ')
    s = s.replace('Ω', '\\Omega ')
    s = s.replace('∞', '\\infty ')
    s = s.replace('∫', '\\int ')
    s = s.replace('∂', '\\partial ')
    s = s.replace('∇', '\\nabla ')
    s = s.replace('⇒', '\\Rightarrow ')
    s = s.replace('⇔', '\\Leftrightarrow ')
    s = s.replace('→', '\\rightarrow ')
    
    # Exponent and special characters
    s = s.replace('–', '-')
    s = s.replace('—', '-')
    s = s.replace('%', '\\%')
    s = s.replace('ħ', '\\hbar ')
    s = s.replace('Ĥ', '\\hat{H}')
    s = s.replace('ȳ', '\\bar{y}')
    s = s.replace('x̄', '\\bar{x}')
    s = s.replace('ŷ', '\\hat{y}')
    s = s.replace('ḱ', 'k')
    s = s.replace('²', '^2')
    s = s.replace('³', '^3')
    s = s.replace('⁴', '^4')
    s = s.replace('ⁿ', '^n')
    s = s.replace('½', '\\frac{1}{2}')
    s = s.replace('¼', '\\frac{1}{4}')
    s = s.replace('¾', '\\frac{3}{4}')

    return s

def map_category(ch, sec):
    ch_lower = ch.lower()
    sec_lower = sec.lower()

    if 'arithmetic' in sec_lower or 'number sense' in sec_lower:
        return 'arithmetic'
    elif 'geometry' in sec_lower or 'mensuration' in sec_lower or 'triangle' in sec_lower:
        return 'geometry'
    elif 'algebra' in sec_lower or 'quadratic' in sec_lower or 'binomial' in sec_lower or 'exponents' in sec_lower:
        return 'algebra'
    elif 'trigonometry' in sec_lower:
        return 'trig'
    elif 'calculus' in sec_lower or 'pde' in sec_lower or 'differential' in sec_lower:
        return 'calculus'
    elif 'linear algebra' in sec_lower or 'matrix' in sec_lower or 'vector' in sec_lower:
        return 'matrices'
    elif 'physics' in ch_lower or 'astronomy' in ch_lower or 'geophysics' in sec_lower:
        return 'physics'
    elif 'chemistry' in ch_lower:
        return 'chemistry'
    elif 'biology' in ch_lower or 'health' in ch_lower:
        return 'biology'
    elif 'statistics' in ch_lower or 'data science' in ch_lower or 'psychology' in ch_lower:
        return 'stats'
    elif 'computer' in ch_lower:
        return 'cs'
    elif 'engineering' in ch_lower:
        return 'engineering'
    elif 'economics' in ch_lower or 'finance' in ch_lower or 'business' in ch_lower or 'commercial' in sec_lower:
        return 'finance'
    elif 'earth' in ch_lower:
        return 'earth'
    else:
        return 'algebra'

final_formulas = []
seen_keys = set()

for idx, it in enumerate(items):
    name = it['name']
    raw = it['raw_expr']
    ch = it['chapter']
    sec = it['section']

    latex = clean_to_latex(name, raw, sec)
    cat = map_category(ch, sec)
    
    unique_key = f"{name}::{latex}"
    if unique_key in seen_keys:
        continue
    seen_keys.add(unique_key)

    final_formulas.append({
        'id': f"hb-{idx+1}",
        'name': name,
        'category': cat,
        'chapter': ch,
        'section': sec,
        'latex': latex,
        'display': latex,
        'desc': f"{sec} (Class 1 to PhD Handbook)"
    })

print(f"Total processed handbook formulas: {len(final_formulas)}")

with open('scratch_final_handbook_formulas.json', 'w', encoding='utf-8') as f:
    json.dump(final_formulas, f, indent=2)
