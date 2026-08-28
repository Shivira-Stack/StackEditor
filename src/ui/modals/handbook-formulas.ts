export interface MathItem {
  id: string;
  name: string;
  category: string;
  chapter?: string;
  section?: string;
  latex: string;
  display: string;
  desc?: string;
  isPreset?: boolean;
}

export const ALL_MATH_ITEMS: MathItem[] = [
  {
    "id": "hb-1",
    "name": "Physics",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "Class 6-10, Class 9-12, Class 11-12, Class 12-University, University-PhD",
    "display": "Class 6-10, Class 9-12, Class 11-12, Class 12-University, University-PhD",
    "desc": "Physics • "
  },
  {
    "id": "hb-2",
    "name": "Chemistry",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "Class 8-10, Class 10-12, Class 11-12, University-PhD",
    "display": "Class 8-10, Class 10-12, Class 11-12, University-PhD",
    "desc": "Chemistry • "
  },
  {
    "id": "hb-3",
    "name": "Biology",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "Class 6-12, Class 11-University, University-PhD",
    "display": "Class 6-12, Class 11-University, University-PhD",
    "desc": "Biology • "
  },
  {
    "id": "hb-4",
    "name": "Statistics & Data Science",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "Class 9-12, University-PhD",
    "display": "Class 9-12, University-PhD",
    "desc": "Statistics & Data Science • "
  },
  {
    "id": "hb-5",
    "name": "Computer Science",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "Class 6-12, University-PhD",
    "display": "Class 6-12, University-PhD",
    "desc": "Computer Science • "
  },
  {
    "id": "hb-6",
    "name": "Engineering",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "University",
    "display": "University",
    "desc": "Engineering • "
  },
  {
    "id": "hb-7",
    "name": "Economics & Finance",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "Class 9-12, University-PhD",
    "display": "Class 9-12, University-PhD",
    "desc": "Economics & Finance • "
  },
  {
    "id": "hb-8",
    "name": "Earth & Environmental Science",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "Class 6-12, University-PhD",
    "display": "Class 6-12, University-PhD",
    "desc": "Earth & Environmental Science • "
  },
  {
    "id": "hb-9",
    "name": "Health Sciences",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "University",
    "display": "University",
    "desc": "Health Sciences • "
  },
  {
    "id": "hb-10",
    "name": "Psychology & Social Science",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "University-PhD",
    "display": "University-PhD",
    "desc": "Psychology & Social Science • "
  },
  {
    "id": "hb-11",
    "name": "Business, Accounting & Operations",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "University",
    "display": "University",
    "desc": "Business, Accounting & Operations • "
  },
  {
    "id": "hb-12",
    "name": "Astronomy & Astrophysics",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "University-PhD",
    "display": "University-PhD",
    "desc": "Astronomy & Astrophysics • "
  },
  {
    "id": "hb-13",
    "name": "Reference",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "All Levels",
    "display": "All Levels",
    "desc": "Reference • "
  },
  {
    "id": "hb-14",
    "name": "Notation note: Formula conventions can differ between countries, curricula, and disciplines. Always check the",
    "category": "algebra",
    "chapter": "math",
    "section": "",
    "latex": "definition, units, assumptions, and sign convention before using a formula in a graded or professional setting.",
    "display": "definition, units, assumptions, and sign convention before using a formula in a graded or professional setting.",
    "desc": "Notation note: Formula conventions can differ between countries, curricula, and disciplines. Always check the • "
  },
  {
    "id": "hb-15",
    "name": "Place value",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "Number = \\sum (digit \\times  place value)",
    "display": "Number = \\sum (digit \\times  place value)",
    "desc": "Place value • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-16",
    "name": "Addition",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "a + b = b + a",
    "display": "a + b = b + a",
    "desc": "Addition • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-17",
    "name": "Associativity",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "(a + b) + c = a + (b + c)",
    "display": "(a + b) + c = a + (b + c)",
    "desc": "Associativity • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-18",
    "name": "Subtraction",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "a − b = a + (−b)",
    "display": "a − b = a + (−b)",
    "desc": "Subtraction • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-19",
    "name": "Multiplication",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "a \\times  b = b \\times  a",
    "display": "a \\times  b = b \\times  a",
    "desc": "Multiplication • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-20",
    "name": "Associativity",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "(ab)c = a(bc)",
    "display": "(ab)c = a(bc)",
    "desc": "Associativity • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-21",
    "name": "Distributive law",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "a(b + c) = ab + ac",
    "display": "a(b + c) = ab + ac",
    "desc": "Distributive law • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-22",
    "name": "Division",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "Dividend = Divisor \\times  Quotient + Remainder",
    "display": "Dividend = Divisor \\times  Quotient + Remainder",
    "desc": "Division • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-23",
    "name": "Average",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "Average = Sum of observations / Number of observations",
    "display": "Average = Sum of observations / Number of observations",
    "desc": "Average • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-24",
    "name": "Fraction addition",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "a/b + c/d = (ad + bc)/(bd)",
    "display": "a/b + c/d = (ad + bc)/(bd)",
    "desc": "Fraction addition • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-25",
    "name": "Fraction subtraction",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "a/b − c/d = (ad − bc)/(bd)",
    "display": "a/b − c/d = (ad − bc)/(bd)",
    "desc": "Fraction subtraction • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-26",
    "name": "Fraction multiplication",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "(a/b)(c/d) = ac/bd",
    "display": "(a/b)(c/d) = ac/bd",
    "desc": "Fraction multiplication • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-27",
    "name": "Fraction division",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "(a/b) \\div  (c/d) = ad/bc",
    "display": "(a/b) \\div  (c/d) = ad/bc",
    "desc": "Fraction division • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-28",
    "name": "Percentage",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "Percentage = (Part / Whole) \\times  100",
    "display": "Percentage = (Part / Whole) \\times  100",
    "desc": "Percentage • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-29",
    "name": "Unitary method",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "Value of one unit = Total value / Number of units",
    "display": "Value of one unit = Total value / Number of units",
    "desc": "Unitary method • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-30",
    "name": "Ratio",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "a:b = a/b",
    "display": "a:b = a/b",
    "desc": "Ratio • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-31",
    "name": "Proportion",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "a:b = c:d  \\Rightarrow   ad = bc",
    "display": "a:b = c:d  \\Rightarrow   ad = bc",
    "desc": "Proportion • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-32",
    "name": "Speed",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "Speed = Distance / Time",
    "display": "Speed = Distance / Time",
    "desc": "Speed • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-33",
    "name": "Distance",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "Distance = Speed \\times  Time",
    "display": "Distance = Speed \\times  Time",
    "desc": "Distance • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-34",
    "name": "Time",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.1 Arithmetic & Number Sense (Class 1",
    "latex": "Time = Distance / Speed",
    "display": "Time = Distance / Speed",
    "desc": "Time • 1.1 Arithmetic & Number Sense (Class 1"
  },
  {
    "id": "hb-35",
    "name": "Perimeter of square",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "P = 4a",
    "display": "P = 4a",
    "desc": "Perimeter of square • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-36",
    "name": "Area of square",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "A = a^2",
    "display": "A = a^2",
    "desc": "Area of square • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-37",
    "name": "Perimeter of rectangle",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "P = 2(l + b)",
    "display": "P = 2(l + b)",
    "desc": "Perimeter of rectangle • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-38",
    "name": "Area of rectangle",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "A = lb",
    "display": "A = lb",
    "desc": "Area of rectangle • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-39",
    "name": "Triangle area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "A = \\frac{1}{2}bh",
    "display": "A = \\frac{1}{2}bh",
    "desc": "Triangle area • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-40",
    "name": "Parallelogram area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "A = bh",
    "display": "A = bh",
    "desc": "Parallelogram area • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-41",
    "name": "Circle circumference",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "C = 2\\pi r = \\pi d",
    "display": "C = 2\\pi r = \\pi d",
    "desc": "Circle circumference • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-42",
    "name": "Circle area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "A = \\pi r^2",
    "display": "A = \\pi r^2",
    "desc": "Circle area • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-43",
    "name": "Cuboid volume",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "V = lbh",
    "display": "V = lbh",
    "desc": "Cuboid volume • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-44",
    "name": "Cube volume",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "V = a^3",
    "display": "V = a^3",
    "desc": "Cube volume • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-45",
    "name": "Cube surface area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "TSA = 6a^2",
    "display": "TSA = 6a^2",
    "desc": "Cube surface area • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-46",
    "name": "Cuboid surface area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "TSA = 2(lb + bh + hl)",
    "display": "TSA = 2(lb + bh + hl)",
    "desc": "Cuboid surface area • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-47",
    "name": "Temperature conversion",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "°F = (9/5)°C + 32",
    "display": "°F = (9/5)°C + 32",
    "desc": "Temperature conversion • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-48",
    "name": "Temperature conversion",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.2 Geometry, Measurement & Mensuration (Class 1",
    "latex": "°C = (5/9)(°F − 32)",
    "display": "°C = (5/9)(°F − 32)",
    "desc": "Temperature conversion • 1.2 Geometry, Measurement & Mensuration (Class 1"
  },
  {
    "id": "hb-49",
    "name": "Identity",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "(a + b)^2 = a^2 + 2ab + b^2",
    "display": "(a + b)^2 = a^2 + 2ab + b^2",
    "desc": "Identity • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-50",
    "name": "Identity",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "(a − b)^2 = a^2 − 2ab + b^2",
    "display": "(a − b)^2 = a^2 − 2ab + b^2",
    "desc": "Identity • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-51",
    "name": "Difference of squares",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "a^2 − b^2 = (a − b)(a + b)",
    "display": "a^2 − b^2 = (a − b)(a + b)",
    "desc": "Difference of squares • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-52",
    "name": "Cube sum",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "a^3 + b^3 = (a + b)(a^2 − ab + b^2)",
    "display": "a^3 + b^3 = (a + b)(a^2 − ab + b^2)",
    "desc": "Cube sum • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-53",
    "name": "Cube difference",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "a^3 − b^3 = (a − b)(a^2 + ab + b^2)",
    "display": "a^3 − b^3 = (a − b)(a^2 + ab + b^2)",
    "desc": "Cube difference • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-54",
    "name": "Three-term square",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "(a+b+c)^2 = a^2+b^2+c^2+2ab+2bc+2ca",
    "display": "(a+b+c)^2 = a^2+b^2+c^2+2ab+2bc+2ca",
    "desc": "Three-term square • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-55",
    "name": "Exponent product",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "a^m a^n = a^(m+n)",
    "display": "a^m a^n = a^(m+n)",
    "desc": "Exponent product • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-56",
    "name": "Exponent quotient",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "a^m/a^n = a^(m−n)",
    "display": "a^m/a^n = a^(m−n)",
    "desc": "Exponent quotient • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-57",
    "name": "Power of a power",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "(a^m)^n = a^(mn)",
    "display": "(a^m)^n = a^(mn)",
    "desc": "Power of a power • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-58",
    "name": "Zero exponent",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "a⁰ = 1, a \\neq  0",
    "display": "a⁰ = 1, a \\neq  0",
    "desc": "Zero exponent • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-59",
    "name": "Negative exponent",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "a^(−n) = 1/a^n",
    "display": "a^(−n) = 1/a^n",
    "desc": "Negative exponent • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-60",
    "name": "Direct proportion",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "y = kx",
    "display": "y = kx",
    "desc": "Direct proportion • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-61",
    "name": "Inverse proportion",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.3 Algebra & Exponents (Class 6",
    "latex": "y = k/x",
    "display": "y = k/x",
    "desc": "Inverse proportion • 1.3 Algebra & Exponents (Class 6"
  },
  {
    "id": "hb-62",
    "name": "Profit",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "Profit = SP − CP",
    "display": "Profit = SP − CP",
    "desc": "Profit • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-63",
    "name": "Loss",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "Loss = CP − SP",
    "display": "Loss = CP − SP",
    "desc": "Loss • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-64",
    "name": "Profit percent",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "Profit\\% = (Profit/CP) \\times  100",
    "display": "Profit\\% = (Profit/CP) \\times  100",
    "desc": "Profit percent • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-65",
    "name": "Loss percent",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "Loss\\% = (Loss/CP) \\times  100",
    "display": "Loss\\% = (Loss/CP) \\times  100",
    "desc": "Loss percent • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-66",
    "name": "Discount",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "Discount = MP − SP",
    "display": "Discount = MP − SP",
    "desc": "Discount • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-67",
    "name": "Discount percent",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "Discount\\% = (Discount/MP) \\times  100",
    "display": "Discount\\% = (Discount/MP) \\times  100",
    "desc": "Discount percent • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-68",
    "name": "Simple interest",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "SI = PRT/100",
    "display": "SI = PRT/100",
    "desc": "Simple interest • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-69",
    "name": "Amount (SI)",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "A = P + SI",
    "display": "A = P + SI",
    "desc": "Amount (SI) • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-70",
    "name": "Compound amount",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "A = P(1 + r/100)^n",
    "display": "A = P(1 + r/100)^n",
    "desc": "Compound amount • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-71",
    "name": "Compound interest",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "CI = A − P",
    "display": "CI = A − P",
    "desc": "Compound interest • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-72",
    "name": "Depreciation",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "V = P(1 − r/100)^n",
    "display": "V = P(1 − r/100)^n",
    "desc": "Depreciation • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-73",
    "name": "GST/tax",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "Tax = Tax rate \\times  Taxable value",
    "display": "Tax = Tax rate \\times  Taxable value",
    "desc": "GST/tax • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-74",
    "name": "Speed average",
    "category": "arithmetic",
    "chapter": "Mathematics",
    "section": "1.4 Commercial Arithmetic (Class 6",
    "latex": "Average speed = Total distance / Total time",
    "display": "Average speed = Total distance / Total time",
    "desc": "Speed average • 1.4 Commercial Arithmetic (Class 6"
  },
  {
    "id": "hb-75",
    "name": "Distance formula",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "d = \\\\sqrt[(x₂−x₁)^2 + (y₂−y₁)^2]",
    "display": "d = \\\\sqrt[(x₂−x₁)^2 + (y₂−y₁)^2]",
    "desc": "Distance formula • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-76",
    "name": "Midpoint",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
    "display": "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
    "desc": "Midpoint • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-77",
    "name": "Section formula",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
    "display": "P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))",
    "desc": "Section formula • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-78",
    "name": "Slope",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "m = (y₂−y₁)/(x₂−x₁)",
    "display": "m = (y₂−y₁)/(x₂−x₁)",
    "desc": "Slope • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-79",
    "name": "Line equation",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "y − y₁ = m(x − x₁)",
    "display": "y − y₁ = m(x − x₁)",
    "desc": "Line equation • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-80",
    "name": "Two-point line",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "(y−y₁)/(y₂−y₁) = (x−x₁)/(x₂−x₁)",
    "display": "(y−y₁)/(y₂−y₁) = (x−x₁)/(x₂−x₁)",
    "desc": "Two-point line • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-81",
    "name": "Pythagorean theorem",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "c^2 = a^2 + b^2",
    "display": "c^2 = a^2 + b^2",
    "desc": "Pythagorean theorem • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-82",
    "name": "Triangle area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "A = \\frac{1}{2} \\times  base \\times  height",
    "display": "A = \\frac{1}{2} \\times  base \\times  height",
    "desc": "Triangle area • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-83",
    "name": "Heron's formula",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "s = (a+b+c)/2;  A = \\\\sqrt[s(s−a)(s−b)(s−c)]",
    "display": "s = (a+b+c)/2;  A = \\\\sqrt[s(s−a)(s−b)(s−c)]",
    "desc": "Heron's formula • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-84",
    "name": "Equilateral triangle",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "A = (\\sqrt3/4)a^2",
    "display": "A = (\\sqrt3/4)a^2",
    "desc": "Equilateral triangle • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-85",
    "name": "Equilateral height",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.5 Coordinate Geometry & Triangles (Class 9",
    "latex": "h = (\\sqrt3/2)a",
    "display": "h = (\\sqrt3/2)a",
    "desc": "Equilateral height • 1.5 Coordinate Geometry & Triangles (Class 9"
  },
  {
    "id": "hb-86",
    "name": "Arc length",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "L = (\\theta /360°) \\times  2\\pi r",
    "display": "L = (\\theta /360°) \\times  2\\pi r",
    "desc": "Arc length • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-87",
    "name": "Sector area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "A = (\\theta /360°) \\times  \\pi r^2",
    "display": "A = (\\theta /360°) \\times  \\pi r^2",
    "desc": "Sector area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-88",
    "name": "Ring/annulus area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "A = \\pi (R^2−r^2)",
    "display": "A = \\pi (R^2−r^2)",
    "desc": "Ring/annulus area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-89",
    "name": "Cylinder volume",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "V = \\pi r^2h",
    "display": "V = \\pi r^2h",
    "desc": "Cylinder volume • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-90",
    "name": "Cylinder curved area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "CSA = 2\\pi rh",
    "display": "CSA = 2\\pi rh",
    "desc": "Cylinder curved area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-91",
    "name": "Cylinder total area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "TSA = 2\\pi r(h+r)",
    "display": "TSA = 2\\pi r(h+r)",
    "desc": "Cylinder total area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-92",
    "name": "Cone volume",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "V = (1/3)\\pi r^2h",
    "display": "V = (1/3)\\pi r^2h",
    "desc": "Cone volume • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-93",
    "name": "Cone slant height",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "l = \\sqrt(r^2+h^2)",
    "display": "l = \\sqrt(r^2+h^2)",
    "desc": "Cone slant height • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-94",
    "name": "Cone curved area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "CSA = \\pi rl",
    "display": "CSA = \\pi rl",
    "desc": "Cone curved area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-95",
    "name": "Cone total area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "TSA = \\pi r(l+r)",
    "display": "TSA = \\pi r(l+r)",
    "desc": "Cone total area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-96",
    "name": "Sphere volume",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "V = (4/3)\\pi r^3",
    "display": "V = (4/3)\\pi r^3",
    "desc": "Sphere volume • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-97",
    "name": "Sphere area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "A = 4\\pi r^2",
    "display": "A = 4\\pi r^2",
    "desc": "Sphere area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-98",
    "name": "Hemisphere volume",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "V = (2/3)\\pi r^3",
    "display": "V = (2/3)\\pi r^3",
    "desc": "Hemisphere volume • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-99",
    "name": "Hemisphere curved area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "CSA = 2\\pi r^2",
    "display": "CSA = 2\\pi r^2",
    "desc": "Hemisphere curved area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-100",
    "name": "Hemisphere total area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "TSA = 3\\pi r^2",
    "display": "TSA = 3\\pi r^2",
    "desc": "Hemisphere total area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-101",
    "name": "Frustum volume",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "V = (1/3)\\pi h(R^2 + r^2 + Rr)",
    "display": "V = (1/3)\\pi h(R^2 + r^2 + Rr)",
    "desc": "Frustum volume • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-102",
    "name": "Frustum slant height",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "l = \\\\sqrt[h^2 + (R−r)^2]",
    "display": "l = \\\\sqrt[h^2 + (R−r)^2]",
    "desc": "Frustum slant height • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-103",
    "name": "Frustum curved area",
    "category": "geometry",
    "chapter": "Mathematics",
    "section": "1.6 Circle & Mensuration (Class 9",
    "latex": "CSA = \\pi (R+r)l",
    "display": "CSA = \\pi (R+r)l",
    "desc": "Frustum curved area • 1.6 Circle & Mensuration (Class 9"
  },
  {
    "id": "hb-104",
    "name": "Quadratic roots",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "x = [−b \\pm  \\sqrt(b^2−4ac)]/(2a)",
    "display": "x = [−b \\pm  \\sqrt(b^2−4ac)]/(2a)",
    "desc": "Quadratic roots • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-105",
    "name": "Discriminant",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "D = b^2 − 4ac",
    "display": "D = b^2 − 4ac",
    "desc": "Discriminant • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-106",
    "name": "Sum of roots",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "\\alpha  + \\beta  = −b/a",
    "display": "\\alpha  + \\beta  = −b/a",
    "desc": "Sum of roots • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-107",
    "name": "Product of roots",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "\\alpha \\beta  = c/a",
    "display": "\\alpha \\beta  = c/a",
    "desc": "Product of roots • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-108",
    "name": "AP nth term",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "a_n = a + (n−1)d",
    "display": "a_n = a + (n−1)d",
    "desc": "AP nth term • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-109",
    "name": "AP sum",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "S_n = n/2 [2a + (n−1)d]",
    "display": "S_n = n/2 [2a + (n−1)d]",
    "desc": "AP sum • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-110",
    "name": "AP sum using last term",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "S_n = n(a+l)/2",
    "display": "S_n = n(a+l)/2",
    "desc": "AP sum using last term • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-111",
    "name": "GP nth term",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "a_n = ar^(n−1)",
    "display": "a_n = ar^(n−1)",
    "desc": "GP nth term • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-112",
    "name": "GP sum",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "S_n = a(r^n−1)/(r−1), r\\neq 1",
    "display": "S_n = a(r^n−1)/(r−1), r\\neq 1",
    "desc": "GP sum • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-113",
    "name": "Infinite GP",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "S_\\infty  = a/(1−r), |r|<1",
    "display": "S_\\infty  = a/(1−r), |r|<1",
    "desc": "Infinite GP • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-114",
    "name": "Binomial theorem",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "(x+y)^n = \\sum  C(n,k)x^(n−k)y^k",
    "display": "(x+y)^n = \\sum  C(n,k)x^(n−k)y^k",
    "desc": "Binomial theorem • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-115",
    "name": "Binomial coefficient",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "C(n,r) = n!/[r!(n−r)!]",
    "display": "C(n,r) = n!/[r!(n−r)!]",
    "desc": "Binomial coefficient • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-116",
    "name": "Factorial",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "n! = n(n−1)(n−2)…1",
    "display": "n! = n(n−1)(n−2)…1",
    "desc": "Factorial • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-117",
    "name": "Permutation",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "nP_r = n!/(n−r)!",
    "display": "nP_r = n!/(n−r)!",
    "desc": "Permutation • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-118",
    "name": "Combination",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.7 Quadratic, Sequences & Binomial (Class 11",
    "latex": "nC_r = n!/[r!(n−r)!]",
    "display": "nC_r = n!/[r!(n−r)!]",
    "desc": "Combination • 1.7 Quadratic, Sequences & Binomial (Class 11"
  },
  {
    "id": "hb-119",
    "name": "Pythagorean identity",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "sin^2\\theta  + cos^2\\theta  = 1",
    "display": "sin^2\\theta  + cos^2\\theta  = 1",
    "desc": "Pythagorean identity • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-120",
    "name": "Tangent identity",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "1 + tan^2\\theta  = sec^2\\theta ",
    "display": "1 + tan^2\\theta  = sec^2\\theta ",
    "desc": "Tangent identity • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-121",
    "name": "Cotangent identity",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "1 + cot^2\\theta  = csc^2\\theta ",
    "display": "1 + cot^2\\theta  = csc^2\\theta ",
    "desc": "Cotangent identity • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-122",
    "name": "Tangent",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "tan\\theta  = sin\\theta /cos\\theta ",
    "display": "tan\\theta  = sin\\theta /cos\\theta ",
    "desc": "Tangent • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-123",
    "name": "Cotangent",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "cot\\theta  = cos\\theta /sin\\theta ",
    "display": "cot\\theta  = cos\\theta /sin\\theta ",
    "desc": "Cotangent • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-124",
    "name": "Secant",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "sec\\theta  = 1/cos\\theta ",
    "display": "sec\\theta  = 1/cos\\theta ",
    "desc": "Secant • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-125",
    "name": "Cosecant",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "csc\\theta  = 1/sin\\theta ",
    "display": "csc\\theta  = 1/sin\\theta ",
    "desc": "Cosecant • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-126",
    "name": "Sine sum",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "sin(A+B)=sinA cosB + cosA sinB",
    "display": "sin(A+B)=sinA cosB + cosA sinB",
    "desc": "Sine sum • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-127",
    "name": "Sine difference",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "sin(A−B)=sinA cosB − cosA sinB",
    "display": "sin(A−B)=sinA cosB − cosA sinB",
    "desc": "Sine difference • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-128",
    "name": "Cosine sum",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "cos(A+B)=cosA cosB − sinA sinB",
    "display": "cos(A+B)=cosA cosB − sinA sinB",
    "desc": "Cosine sum • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-129",
    "name": "Cosine difference",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "cos(A−B)=cosA cosB + sinA sinB",
    "display": "cos(A−B)=cosA cosB + sinA sinB",
    "desc": "Cosine difference • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-130",
    "name": "Tangent sum",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "tan(A+B)=(tanA+tanB)/(1−tanA tanB)",
    "display": "tan(A+B)=(tanA+tanB)/(1−tanA tanB)",
    "desc": "Tangent sum • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-131",
    "name": "Double sine",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "sin2A = 2sinA cosA",
    "display": "sin2A = 2sinA cosA",
    "desc": "Double sine • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-132",
    "name": "Double cosine",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "cos2A = cos^2A−sin^2A = 1−2sin^2A = 2cos^2A−1",
    "display": "cos2A = cos^2A−sin^2A = 1−2sin^2A = 2cos^2A−1",
    "desc": "Double cosine • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-133",
    "name": "Double tangent",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "tan2A = 2tanA/(1−tan^2A)",
    "display": "tan2A = 2tanA/(1−tan^2A)",
    "desc": "Double tangent • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-134",
    "name": "Law of sines",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "a/sinA = b/sinB = c/sinC = 2R",
    "display": "a/sinA = b/sinB = c/sinC = 2R",
    "desc": "Law of sines • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-135",
    "name": "Law of cosines",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "c^2 = a^2+b^2−2ab cosC",
    "display": "c^2 = a^2+b^2−2ab cosC",
    "desc": "Law of cosines • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-136",
    "name": "Triangle area (trig)",
    "category": "trig",
    "chapter": "Mathematics",
    "section": "1.8 Trigonometry (Class 11",
    "latex": "A = \\frac{1}{2}ab sinC",
    "display": "A = \\frac{1}{2}ab sinC",
    "desc": "Triangle area (trig) • 1.8 Trigonometry (Class 11"
  },
  {
    "id": "hb-137",
    "name": "Power rule",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d(x^n)/dx = nx^(n−1)",
    "display": "d(x^n)/dx = nx^(n−1)",
    "desc": "Power rule • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-138",
    "name": "Constant derivative",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d(c)/dx = 0",
    "display": "d(c)/dx = 0",
    "desc": "Constant derivative • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-139",
    "name": "Exponential",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d(e^x)/dx = e^x",
    "display": "d(e^x)/dx = e^x",
    "desc": "Exponential • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-140",
    "name": "General exponential",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d(a^x)/dx = a^x ln a",
    "display": "d(a^x)/dx = a^x ln a",
    "desc": "General exponential • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-141",
    "name": "Logarithm",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d(ln x)/dx = 1/x",
    "display": "d(ln x)/dx = 1/x",
    "desc": "Logarithm • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-142",
    "name": "Sine",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d(sin x)/dx = cos x",
    "display": "d(sin x)/dx = cos x",
    "desc": "Sine • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-143",
    "name": "Cosine",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d(cos x)/dx = −sin x",
    "display": "d(cos x)/dx = −sin x",
    "desc": "Cosine • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-144",
    "name": "Tangent",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d(tan x)/dx = sec^2x",
    "display": "d(tan x)/dx = sec^2x",
    "desc": "Tangent • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-145",
    "name": "Product rule",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "(fg)' = f'g + fg'",
    "display": "(fg)' = f'g + fg'",
    "desc": "Product rule • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-146",
    "name": "Quotient rule",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "(f/g)' = (f'g−fg')/g^2",
    "display": "(f/g)' = (f'g−fg')/g^2",
    "desc": "Quotient rule • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-147",
    "name": "Chain rule",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "d f(g(x))/dx = f'(g(x))g'(x)",
    "display": "d f(g(x))/dx = f'(g(x))g'(x)",
    "desc": "Chain rule • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-148",
    "name": "Integral power",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "\\int x^n dx = x^(n+1)/(n+1)+C, n\\neq −1",
    "display": "\\int x^n dx = x^(n+1)/(n+1)+C, n\\neq −1",
    "desc": "Integral power • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-149",
    "name": "Integral reciprocal",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "\\int dx/x = ln|x| + C",
    "display": "\\int dx/x = ln|x| + C",
    "desc": "Integral reciprocal • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-150",
    "name": "Exponential integral",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "\\int e^x dx = e^x + C",
    "display": "\\int e^x dx = e^x + C",
    "desc": "Exponential integral • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-151",
    "name": "Sine integral",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "\\int sin x dx = −cos x + C",
    "display": "\\int sin x dx = −cos x + C",
    "desc": "Sine integral • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-152",
    "name": "Cosine integral",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "\\int cos x dx = sin x + C",
    "display": "\\int cos x dx = sin x + C",
    "desc": "Cosine integral • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-153",
    "name": "Tangent integral",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "\\int tan x dx = −ln|cos x| + C",
    "display": "\\int tan x dx = −ln|cos x| + C",
    "desc": "Tangent integral • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-154",
    "name": "Integration by parts",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "\\int u dv = uv − \\int v du",
    "display": "\\int u dv = uv − \\int v du",
    "desc": "Integration by parts • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-155",
    "name": "Fundamental theorem",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "\\int _a^b f(x)dx = F(b)−F(a), where F'=f",
    "display": "\\int _a^b f(x)dx = F(b)−F(a), where F'=f",
    "desc": "Fundamental theorem • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-156",
    "name": "Average value",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "1.9 Differential & Integral Calculus (Class 11",
    "latex": "f_avg = (1/(b−a))\\int _a^b f(x)dx",
    "display": "f_avg = (1/(b−a))\\int _a^b f(x)dx",
    "desc": "Average value • 1.9 Differential & Integral Calculus (Class 11"
  },
  {
    "id": "hb-157",
    "name": "Mean",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "\\bar{x} = \\sum x/n",
    "display": "\\bar{x} = \\sum x/n",
    "desc": "Mean • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-158",
    "name": "Weighted mean",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "\\bar{x}_w = \\sum w_ix_i / \\sum w_i",
    "display": "\\bar{x}_w = \\sum w_ix_i / \\sum w_i",
    "desc": "Weighted mean • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-159",
    "name": "Variance (population)",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "\\sigma ^2 = \\sum (x−\\mu )^2/N",
    "display": "\\sigma ^2 = \\sum (x−\\mu )^2/N",
    "desc": "Variance (population) • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-160",
    "name": "Variance (sample)",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "s^2 = \\sum (x−\\bar{x})^2/(n−1)",
    "display": "s^2 = \\sum (x−\\bar{x})^2/(n−1)",
    "desc": "Variance (sample) • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-161",
    "name": "Standard deviation",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "\\\\sigma  = \\\\text{sqrtvariance}",
    "display": "\\\\sigma  = \\\\text{sqrtvariance}",
    "desc": "Standard deviation • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-162",
    "name": "Probability complement",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "P(Aᶜ)=1−P(A)",
    "display": "P(Aᶜ)=1−P(A)",
    "desc": "Probability complement • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-163",
    "name": "Addition rule",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "P(A∪B)=P(A)+P(B)−P(A∩B)",
    "display": "P(A∪B)=P(A)+P(B)−P(A∩B)",
    "desc": "Addition rule • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-164",
    "name": "Conditional probability",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "P(A|B)=P(A∩B)/P(B)",
    "display": "P(A|B)=P(A∩B)/P(B)",
    "desc": "Conditional probability • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-165",
    "name": "Multiplication rule",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "P(A∩B)=P(A|B)P(B)",
    "display": "P(A∩B)=P(A|B)P(B)",
    "desc": "Multiplication rule • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-166",
    "name": "Independent events",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "P(A∩B)=P(A)P(B)",
    "display": "P(A∩B)=P(A)P(B)",
    "desc": "Independent events • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-167",
    "name": "Bayes theorem",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "P(A|B)=P(B|A)P(A)/P(B)",
    "display": "P(A|B)=P(B|A)P(A)/P(B)",
    "desc": "Bayes theorem • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-168",
    "name": "Binomial probability",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "P(X=k)=C(n,k)p^k(1−p)^(n−k)",
    "display": "P(X=k)=C(n,k)p^k(1−p)^(n−k)",
    "desc": "Binomial probability • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-169",
    "name": "Binomial mean",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "\\mu =np",
    "display": "\\mu =np",
    "desc": "Binomial mean • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-170",
    "name": "Binomial variance",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "\\sigma ^2=np(1−p)",
    "display": "\\sigma ^2=np(1−p)",
    "desc": "Binomial variance • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-171",
    "name": "Poisson probability",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "P(X=k)=e^(−\\lambda )\\lambda ^k/k!",
    "display": "P(X=k)=e^(−\\lambda )\\lambda ^k/k!",
    "desc": "Poisson probability • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-172",
    "name": "Poisson mean/variance",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "\\mu =\\sigma ^2=\\lambda ",
    "display": "\\mu =\\sigma ^2=\\lambda ",
    "desc": "Poisson mean/variance • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-173",
    "name": "Normal z-score",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "z=(x−\\mu )/\\sigma ",
    "display": "z=(x−\\mu )/\\sigma ",
    "desc": "Normal z-score • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-174",
    "name": "Coefficient of variation",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.10 Probability & Statistics (Class 11",
    "latex": "CV=(\\sigma /\\mu )\\times 100\\%",
    "display": "CV=(\\sigma /\\mu )\\times 100\\%",
    "desc": "Coefficient of variation • 1.10 Probability & Statistics (Class 11"
  },
  {
    "id": "hb-175",
    "name": "Matrix product",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "(AB)_ij = \\sum _k a_ik b_kj",
    "display": "(AB)_ij = \\sum _k a_ik b_kj",
    "desc": "Matrix product • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-176",
    "name": "2×2 determinant",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "|A| = ad−bc",
    "display": "|A| = ad−bc",
    "desc": "2×2 determinant • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-177",
    "name": "2×2 inverse",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "A⁻¹ = (1/(ad−bc)) [[d,−b], [−c,a]]",
    "display": "A⁻¹ = (1/(ad−bc)) [[d,−b], [−c,a]]",
    "desc": "2×2 inverse • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-178",
    "name": "Eigenvalue equation",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "det(A−\\lambda I)=0",
    "display": "det(A−\\lambda I)=0",
    "desc": "Eigenvalue equation • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-179",
    "name": "Eigenvector equation",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "Av=\\lambda v",
    "display": "Av=\\lambda v",
    "desc": "Eigenvector equation • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-180",
    "name": "Trace",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "tr(A)=\\sum _i a_ii = \\sum  eigenvalues",
    "display": "tr(A)=\\sum _i a_ii = \\sum  eigenvalues",
    "desc": "Trace • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-181",
    "name": "Rank-nullity",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "rank(A)+nullity(A)=n",
    "display": "rank(A)+nullity(A)=n",
    "desc": "Rank-nullity • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-182",
    "name": "Dot product",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "u·v = \\sum u_iv_i = ||u||||v||cos\\theta ",
    "display": "u·v = \\sum u_iv_i = ||u||||v||cos\\theta ",
    "desc": "Dot product • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-183",
    "name": "Cauchy–Schwarz",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "|u·v| \\leq  ||u||||v||",
    "display": "|u·v| \\leq  ||u||||v||",
    "desc": "Cauchy–Schwarz • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-184",
    "name": "Taylor series",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "f(x)=\\sum _{n=0}\\infty  f^(n)(a)(x−a)^n/n!",
    "display": "f(x)=\\sum _{n=0}\\infty  f^(n)(a)(x−a)^n/n!",
    "desc": "Taylor series • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-185",
    "name": "Maclaurin series",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "f(x)=\\sum _{n=0}\\infty  f^(n)(0)x^n/n!",
    "display": "f(x)=\\sum _{n=0}\\infty  f^(n)(0)x^n/n!",
    "desc": "Maclaurin series • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-186",
    "name": "L'Hôpital rule",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "lim f/g = lim f'/g' under applicable conditions",
    "display": "lim f/g = lim f'/g' under applicable conditions",
    "desc": "L'Hôpital rule • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-187",
    "name": "Gradient",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "\\nabla f = (\\partial f/\\partial x₁,…,\\partial f/\\partial x_n)",
    "display": "\\nabla f = (\\partial f/\\partial x₁,…,\\partial f/\\partial x_n)",
    "desc": "Gradient • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-188",
    "name": "Divergence",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "\\nabla ·F = \\sum _i \\partial F_i/\\partial x_i",
    "display": "\\nabla ·F = \\sum _i \\partial F_i/\\partial x_i",
    "desc": "Divergence • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-189",
    "name": "Curl",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "\\nabla \\times F",
    "display": "\\nabla \\times F",
    "desc": "Curl • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-190",
    "name": "Laplacian",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "\\nabla ^2f = \\sum _i \\partial ^2f/\\partial x_i^2",
    "display": "\\nabla ^2f = \\sum _i \\partial ^2f/\\partial x_i^2",
    "desc": "Laplacian • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-191",
    "name": "Fourier transform",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "F(\\omega )=\\int _{−\\infty }\\infty  f(t)e^(−i\\omega t)dt",
    "display": "F(\\omega )=\\int _{−\\infty }\\infty  f(t)e^(−i\\omega t)dt",
    "desc": "Fourier transform • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-192",
    "name": "Inverse Fourier transform",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "f(t)=(1/2\\pi )\\int F(\\omega )e^(i\\omega t)d\\omega ",
    "display": "f(t)=(1/2\\pi )\\int F(\\omega )e^(i\\omega t)d\\omega ",
    "desc": "Inverse Fourier transform • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-193",
    "name": "Laplace transform",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "L{f(t)}=\\int _0\\infty e^(−st)f(t)dt",
    "display": "L{f(t)}=\\int _0\\infty e^(−st)f(t)dt",
    "desc": "Laplace transform • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-194",
    "name": "Convolution",
    "category": "algebra",
    "chapter": "Mathematics",
    "section": "1.11 Linear Algebra & Advanced Mathematics (University",
    "latex": "(f*g)(t)=\\int f(τ)g(t−τ)dτ",
    "display": "(f*g)(t)=\\int f(τ)g(t−τ)dτ",
    "desc": "Convolution • 1.11 Linear Algebra & Advanced Mathematics (University"
  },
  {
    "id": "hb-195",
    "name": "Speed",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "v = s/t",
    "display": "v = s/t",
    "desc": "Speed • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-196",
    "name": "Acceleration",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "a = \\Delta v/\\Delta t",
    "display": "a = \\Delta v/\\Delta t",
    "desc": "Acceleration • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-197",
    "name": "Newton's second law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "F = ma",
    "display": "F = ma",
    "desc": "Newton's second law • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-198",
    "name": "Momentum",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "p = mv",
    "display": "p = mv",
    "desc": "Momentum • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-199",
    "name": "Impulse",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "J = F\\Delta t = \\Delta p",
    "display": "J = F\\Delta t = \\Delta p",
    "desc": "Impulse • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-200",
    "name": "Weight",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "W = mg",
    "display": "W = mg",
    "desc": "Weight • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-201",
    "name": "Work",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "W = Fs cos\\theta ",
    "display": "W = Fs cos\\theta ",
    "desc": "Work • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-202",
    "name": "Kinetic energy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "K = \\frac{1}{2}mv^2",
    "display": "K = \\frac{1}{2}mv^2",
    "desc": "Kinetic energy • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-203",
    "name": "Potential energy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "U = mgh",
    "display": "U = mgh",
    "desc": "Potential energy • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-204",
    "name": "Power",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "P = W/t",
    "display": "P = W/t",
    "desc": "Power • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-205",
    "name": "Pressure",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "p = F/A",
    "display": "p = F/A",
    "desc": "Pressure • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-206",
    "name": "Density",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "\\rho  = m/V",
    "display": "\\rho  = m/V",
    "desc": "Density • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-207",
    "name": "Relative density",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "RD = \\rho _substance/\\rho _water",
    "display": "RD = \\rho _substance/\\rho _water",
    "desc": "Relative density • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-208",
    "name": "Mechanical advantage",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "MA = Load/Effort",
    "display": "MA = Load/Effort",
    "desc": "Mechanical advantage • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-209",
    "name": "Efficiency",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.1 Mechanics & Properties of Matter (Class 6",
    "latex": "η = (Useful output/Input)\\times 100\\%",
    "display": "η = (Useful output/Input)\\times 100\\%",
    "desc": "Efficiency • 2.1 Mechanics & Properties of Matter (Class 6"
  },
  {
    "id": "hb-210",
    "name": "First equation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "v = u + at",
    "display": "v = u + at",
    "desc": "First equation • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-211",
    "name": "Second equation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "s = ut + \\frac{1}{2}at^2",
    "display": "s = ut + \\frac{1}{2}at^2",
    "desc": "Second equation • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-212",
    "name": "Third equation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "v^2 = u^2 + 2as",
    "display": "v^2 = u^2 + 2as",
    "desc": "Third equation • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-213",
    "name": "Average velocity",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "v_avg = displacement/time",
    "display": "v_avg = displacement/time",
    "desc": "Average velocity • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-214",
    "name": "Uniform circular speed",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "v = \\omega r",
    "display": "v = \\omega r",
    "desc": "Uniform circular speed • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-215",
    "name": "Angular velocity",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "\\omega  = \\Delta \\theta /\\Delta t",
    "display": "\\omega  = \\Delta \\theta /\\Delta t",
    "desc": "Angular velocity • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-216",
    "name": "Angular acceleration",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "\\alpha  = \\Delta \\omega /\\Delta t",
    "display": "\\alpha  = \\Delta \\omega /\\Delta t",
    "desc": "Angular acceleration • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-217",
    "name": "Tangential acceleration",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "a_t = \\alpha r",
    "display": "a_t = \\alpha r",
    "desc": "Tangential acceleration • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-218",
    "name": "Centripetal acceleration",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "a_c = v^2/r = \\omega ^2r",
    "display": "a_c = v^2/r = \\omega ^2r",
    "desc": "Centripetal acceleration • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-219",
    "name": "Centripetal force",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "F_c = mv^2/r = m\\omega ^2r",
    "display": "F_c = mv^2/r = m\\omega ^2r",
    "desc": "Centripetal force • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-220",
    "name": "Projectile horizontal range",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "R = u^2 sin2\\theta /g",
    "display": "R = u^2 sin2\\theta /g",
    "desc": "Projectile horizontal range • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-221",
    "name": "Projectile time of flight",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "T = 2u sin\\theta /g",
    "display": "T = 2u sin\\theta /g",
    "desc": "Projectile time of flight • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-222",
    "name": "Projectile maximum height",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.2 Kinematics (Class 9",
    "latex": "H = u^2sin^2\\theta /(2g)",
    "display": "H = u^2sin^2\\theta /(2g)",
    "desc": "Projectile maximum height • 2.2 Kinematics (Class 9"
  },
  {
    "id": "hb-223",
    "name": "Torque",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "τ = r\\times F; |τ| = rF sin\\theta ",
    "display": "τ = r\\times F; |τ| = rF sin\\theta ",
    "desc": "Torque • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-224",
    "name": "Angular momentum",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "L = I\\omega ",
    "display": "L = I\\omega ",
    "desc": "Angular momentum • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-225",
    "name": "Rotational kinetic energy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "K_rot = \\frac{1}{2}I\\omega ^2",
    "display": "K_rot = \\frac{1}{2}I\\omega ^2",
    "desc": "Rotational kinetic energy • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-226",
    "name": "Rotational equation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "τ = I\\alpha ",
    "display": "τ = I\\alpha ",
    "desc": "Rotational equation • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-227",
    "name": "Parallel-axis theorem",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "I = I_CM + Md^2",
    "display": "I = I_CM + Md^2",
    "desc": "Parallel-axis theorem • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-228",
    "name": "Perpendicular-axis theorem",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "I_z = I_x + I_y",
    "display": "I_z = I_x + I_y",
    "desc": "Perpendicular-axis theorem • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-229",
    "name": "Gravitational force",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "F = Gm₁m₂/r^2",
    "display": "F = Gm₁m₂/r^2",
    "desc": "Gravitational force • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-230",
    "name": "Gravitational field",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "g = GM/r^2",
    "display": "g = GM/r^2",
    "desc": "Gravitational field • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-231",
    "name": "Potential",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "V = −GM/r",
    "display": "V = −GM/r",
    "desc": "Potential • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-232",
    "name": "Potential energy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "U = −GMm/r",
    "display": "U = −GMm/r",
    "desc": "Potential energy • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-233",
    "name": "Escape speed",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "v_e = \\sqrt(2GM/R) = \\sqrt(2gR)",
    "display": "v_e = \\sqrt(2GM/R) = \\sqrt(2gR)",
    "desc": "Escape speed • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-234",
    "name": "Orbital speed",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "v_o = \\sqrt(GM/r)",
    "display": "v_o = \\sqrt(GM/r)",
    "desc": "Orbital speed • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-235",
    "name": "Kepler third law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.3 Rotational Mechanics & Gravitation (Class 11",
    "latex": "T^2 ∝ r^3",
    "display": "T^2 ∝ r^3",
    "desc": "Kepler third law • 2.3 Rotational Mechanics & Gravitation (Class 11"
  },
  {
    "id": "hb-236",
    "name": "Continuity equation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "A₁v₁ = A₂v₂",
    "display": "A₁v₁ = A₂v₂",
    "desc": "Continuity equation • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-237",
    "name": "Bernoulli equation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "P + \\frac{1}{2}\\rho v^2 + \\rho gh = constant",
    "display": "P + \\frac{1}{2}\\rho v^2 + \\rho gh = constant",
    "desc": "Bernoulli equation • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-238",
    "name": "Hydrostatic pressure",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "P = P₀ + \\rho gh",
    "display": "P = P₀ + \\rho gh",
    "desc": "Hydrostatic pressure • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-239",
    "name": "Buoyant force",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "F_B = \\rho _fluid V_displaced g",
    "display": "F_B = \\rho _fluid V_displaced g",
    "desc": "Buoyant force • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-240",
    "name": "Young modulus",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "Y = stress/strain",
    "display": "Y = stress/strain",
    "desc": "Young modulus • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-241",
    "name": "Bulk modulus",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "K = −\\Delta P/(\\Delta V/V)",
    "display": "K = −\\Delta P/(\\Delta V/V)",
    "desc": "Bulk modulus • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-242",
    "name": "Shear modulus",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "G = shear stress/shear strain",
    "display": "G = shear stress/shear strain",
    "desc": "Shear modulus • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-243",
    "name": "Ideal gas law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "PV = nRT",
    "display": "PV = nRT",
    "desc": "Ideal gas law • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-244",
    "name": "Combined gas law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "P₁V₁/T₁ = P₂V₂/T₂",
    "display": "P₁V₁/T₁ = P₂V₂/T₂",
    "desc": "Combined gas law • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-245",
    "name": "First law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "\\Delta Q = \\Delta U + W",
    "display": "\\Delta Q = \\Delta U + W",
    "desc": "First law • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-246",
    "name": "Work at constant pressure",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "W = P\\Delta V",
    "display": "W = P\\Delta V",
    "desc": "Work at constant pressure • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-247",
    "name": "Carnot efficiency",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "η = 1 − T_C/T_H",
    "display": "η = 1 − T_C/T_H",
    "desc": "Carnot efficiency • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-248",
    "name": "Entropy differential",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "dS = \\delta Q_rev/T",
    "display": "dS = \\delta Q_rev/T",
    "desc": "Entropy differential • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-249",
    "name": "Heat capacity",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "Q = mc\\Delta T",
    "display": "Q = mc\\Delta T",
    "desc": "Heat capacity • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-250",
    "name": "Latent heat",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.4 Fluids, Elasticity & Thermodynamics (Class 11",
    "latex": "Q = mL",
    "display": "Q = mL",
    "desc": "Latent heat • 2.4 Fluids, Elasticity & Thermodynamics (Class 11"
  },
  {
    "id": "hb-251",
    "name": "Wave speed",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "v = f\\lambda ",
    "display": "v = f\\lambda ",
    "desc": "Wave speed • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-252",
    "name": "Angular frequency",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "\\omega  = 2\\pi f",
    "display": "\\omega  = 2\\pi f",
    "desc": "Angular frequency • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-253",
    "name": "SHM displacement",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "x = A cos(\\omega t+φ)",
    "display": "x = A cos(\\omega t+φ)",
    "desc": "SHM displacement • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-254",
    "name": "SHM velocity",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "v = −A\\omega  sin(\\omega t+φ)",
    "display": "v = −A\\omega  sin(\\omega t+φ)",
    "desc": "SHM velocity • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-255",
    "name": "SHM acceleration",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "a = −\\omega ^2x",
    "display": "a = −\\omega ^2x",
    "desc": "SHM acceleration • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-256",
    "name": "Mass-spring period",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "T = 2\\pi \\sqrt(m/k)",
    "display": "T = 2\\pi \\sqrt(m/k)",
    "desc": "Mass-spring period • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-257",
    "name": "Simple pendulum period",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "T = 2\\pi \\sqrt(L/g)",
    "display": "T = 2\\pi \\sqrt(L/g)",
    "desc": "Simple pendulum period • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-258",
    "name": "Wave equation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "\\partial ^2y/\\partial x^2 = (1/v^2)\\partial ^2y/\\partial t^2",
    "display": "\\partial ^2y/\\partial x^2 = (1/v^2)\\partial ^2y/\\partial t^2",
    "desc": "Wave equation • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-259",
    "name": "Intensity",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "I = Power/Area",
    "display": "I = Power/Area",
    "desc": "Intensity • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-260",
    "name": "Sound level",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "\\beta  = 10 log₁₀(I/I₀) dB",
    "display": "\\beta  = 10 log₁₀(I/I₀) dB",
    "desc": "Sound level • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-261",
    "name": "Beat frequency",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "f_b = |f₁−f₂|",
    "display": "f_b = |f₁−f₂|",
    "desc": "Beat frequency • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-262",
    "name": "Doppler effect",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.5 Waves, SHM & Sound (Class 11",
    "latex": "f' = f(v\\pm v_o)/(v\\mp v_s)",
    "display": "f' = f(v\\pm v_o)/(v\\mp v_s)",
    "desc": "Doppler effect • 2.5 Waves, SHM & Sound (Class 11"
  },
  {
    "id": "hb-263",
    "name": "Coulomb law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "F = (1/(4\\pi \\varepsilon ₀)) q₁q₂/r^2",
    "display": "F = (1/(4\\pi \\varepsilon ₀)) q₁q₂/r^2",
    "desc": "Coulomb law • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-264",
    "name": "Electric field",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "E = F/q",
    "display": "E = F/q",
    "desc": "Electric field • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-265",
    "name": "Point charge field",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "E = (1/(4\\pi \\varepsilon ₀))q/r^2",
    "display": "E = (1/(4\\pi \\varepsilon ₀))q/r^2",
    "desc": "Point charge field • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-266",
    "name": "Electric potential",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "V = (1/(4\\pi \\varepsilon ₀))q/r",
    "display": "V = (1/(4\\pi \\varepsilon ₀))q/r",
    "desc": "Electric potential • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-267",
    "name": "Potential energy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "U = qV",
    "display": "U = qV",
    "desc": "Potential energy • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-268",
    "name": "Capacitance",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "C = Q/V",
    "display": "C = Q/V",
    "desc": "Capacitance • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-269",
    "name": "Parallel plate capacitor",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "C = \\varepsilon A/d",
    "display": "C = \\varepsilon A/d",
    "desc": "Parallel plate capacitor • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-270",
    "name": "Capacitor energy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "U = \\frac{1}{2}CV^2 = Q^2/(2C) = \\frac{1}{2}QV",
    "display": "U = \\frac{1}{2}CV^2 = Q^2/(2C) = \\frac{1}{2}QV",
    "desc": "Capacitor energy • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-271",
    "name": "Ohm law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "V = IR",
    "display": "V = IR",
    "desc": "Ohm law • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-272",
    "name": "Resistivity",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "R = \\rho L/A",
    "display": "R = \\rho L/A",
    "desc": "Resistivity • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-273",
    "name": "Electrical power",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "P = VI = I^2R = V^2/R",
    "display": "P = VI = I^2R = V^2/R",
    "desc": "Electrical power • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-274",
    "name": "Kirchhoff junction",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "\\sum I_in = \\sum I_out",
    "display": "\\sum I_in = \\sum I_out",
    "desc": "Kirchhoff junction • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-275",
    "name": "Kirchhoff loop",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "\\sum \\Delta V = 0",
    "display": "\\sum \\Delta V = 0",
    "desc": "Kirchhoff loop • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-276",
    "name": "Series resistance",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "R_eq = \\sum R_i",
    "display": "R_eq = \\sum R_i",
    "desc": "Series resistance • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-277",
    "name": "Parallel resistance",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "1/R_eq = \\sum (1/R_i)",
    "display": "1/R_eq = \\sum (1/R_i)",
    "desc": "Parallel resistance • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-278",
    "name": "RC time constant",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.6 Electrostatics & Circuits (Class 12",
    "latex": "τ = RC",
    "display": "τ = RC",
    "desc": "RC time constant • 2.6 Electrostatics & Circuits (Class 12"
  },
  {
    "id": "hb-279",
    "name": "Lorentz force",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "F = q(E + v\\times B)",
    "display": "F = q(E + v\\times B)",
    "desc": "Lorentz force • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-280",
    "name": "Magnetic force",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "F = qvB sin\\theta ",
    "display": "F = qvB sin\\theta ",
    "desc": "Magnetic force • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-281",
    "name": "Current force",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "F = I L\\times B",
    "display": "F = I L\\times B",
    "desc": "Current force • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-282",
    "name": "Biot–Savart law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "dB = (\\mu ₀/4\\pi ) I(dℓ\\times r̂)/r^2",
    "display": "dB = (\\mu ₀/4\\pi ) I(dℓ\\times r̂)/r^2",
    "desc": "Biot–Savart law • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-283",
    "name": "Ampere law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "∮B·dℓ = \\mu ₀I_enclosed",
    "display": "∮B·dℓ = \\mu ₀I_enclosed",
    "desc": "Ampere law • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-284",
    "name": "Faraday law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "\\varepsilon  = −dΦ_B/dt",
    "display": "\\varepsilon  = −dΦ_B/dt",
    "desc": "Faraday law • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-285",
    "name": "Magnetic flux",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "Φ_B = \\int B·dA",
    "display": "Φ_B = \\int B·dA",
    "desc": "Magnetic flux • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-286",
    "name": "Lenz law",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "Direction of induced emf opposes flux change",
    "display": "Direction of induced emf opposes flux change",
    "desc": "Lenz law • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-287",
    "name": "Inductor voltage",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "V = L dI/dt",
    "display": "V = L dI/dt",
    "desc": "Inductor voltage • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-288",
    "name": "Inductor energy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "U = \\frac{1}{2}LI^2",
    "display": "U = \\frac{1}{2}LI^2",
    "desc": "Inductor energy • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-289",
    "name": "Maxwell–Gauss electric",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "\\nabla ·E = \\rho /\\varepsilon ₀",
    "display": "\\nabla ·E = \\rho /\\varepsilon ₀",
    "desc": "Maxwell–Gauss electric • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-290",
    "name": "Maxwell–Gauss magnetic",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "\\nabla ·B = 0",
    "display": "\\nabla ·B = 0",
    "desc": "Maxwell–Gauss magnetic • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-291",
    "name": "Maxwell–Faraday",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "\\nabla \\times E = −\\partial B/\\partial t",
    "display": "\\nabla \\times E = −\\partial B/\\partial t",
    "desc": "Maxwell–Faraday • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-292",
    "name": "Maxwell–Ampere",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "\\nabla \\times B = \\mu ₀J + \\mu ₀\\varepsilon ₀\\partial E/\\partial t",
    "display": "\\nabla \\times B = \\mu ₀J + \\mu ₀\\varepsilon ₀\\partial E/\\partial t",
    "desc": "Maxwell–Ampere • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-293",
    "name": "EM wave speed",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "c = 1/\\sqrt(\\mu ₀\\varepsilon ₀)",
    "display": "c = 1/\\sqrt(\\mu ₀\\varepsilon ₀)",
    "desc": "EM wave speed • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-294",
    "name": "Poynting vector",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.7 Electromagnetism (University",
    "latex": "S = (1/\\mu ₀)E\\times B",
    "display": "S = (1/\\mu ₀)E\\times B",
    "desc": "Poynting vector • 2.7 Electromagnetism (University"
  },
  {
    "id": "hb-295",
    "name": "Planck relation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "E = hν = \\hbar \\omega ",
    "display": "E = hν = \\hbar \\omega ",
    "desc": "Planck relation • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-296",
    "name": "de Broglie wavelength",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "\\lambda  = h/p",
    "display": "\\lambda  = h/p",
    "desc": "de Broglie wavelength • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-297",
    "name": "Heisenberg uncertainty",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "\\Delta x \\Delta p \\geq  \\hbar /2",
    "display": "\\Delta x \\Delta p \\geq  \\hbar /2",
    "desc": "Heisenberg uncertainty • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-298",
    "name": "Schrödinger equation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "i\\hbar  \\partial ψ/\\partial t = \\hat{H}ψ",
    "display": "i\\hbar  \\partial ψ/\\partial t = \\hat{H}ψ",
    "desc": "Schrödinger equation • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-299",
    "name": "Time-independent Schrödinger",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "\\hat{H}ψ = Eψ",
    "display": "\\hat{H}ψ = Eψ",
    "desc": "Time-independent Schrödinger • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-300",
    "name": "Probability density",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "\\rho  = |ψ|^2",
    "display": "\\rho  = |ψ|^2",
    "desc": "Probability density • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-301",
    "name": "Normalization",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "\\int |ψ|^2 dτ = 1",
    "display": "\\int |ψ|^2 dτ = 1",
    "desc": "Normalization • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-302",
    "name": "Commutator",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "[A,B] = AB−BA",
    "display": "[A,B] = AB−BA",
    "desc": "Commutator • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-303",
    "name": "Energy-momentum",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "E^2 = p^2c^2 + m^2c^4",
    "display": "E^2 = p^2c^2 + m^2c^4",
    "desc": "Energy-momentum • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-304",
    "name": "Relativistic energy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "E = \\gamma mc^2",
    "display": "E = \\gamma mc^2",
    "desc": "Relativistic energy • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-305",
    "name": "Lorentz factor",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "\\gamma  = 1/\\sqrt(1−v^2/c^2)",
    "display": "\\gamma  = 1/\\sqrt(1−v^2/c^2)",
    "desc": "Lorentz factor • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-306",
    "name": "Time dilation",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "\\Delta t = \\gamma \\Delta t₀",
    "display": "\\Delta t = \\gamma \\Delta t₀",
    "desc": "Time dilation • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-307",
    "name": "Length contraction",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "L = L₀/\\gamma ",
    "display": "L = L₀/\\gamma ",
    "desc": "Length contraction • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-308",
    "name": "Mass-energy rest",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "E₀ = mc^2",
    "display": "E₀ = mc^2",
    "desc": "Mass-energy rest • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-309",
    "name": "Boltzmann factor",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "P ∝ e^(−E/k_BT)",
    "display": "P ∝ e^(−E/k_BT)",
    "desc": "Boltzmann factor • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-310",
    "name": "Partition function",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "Z = \\sum _i e^(−\\beta E_i)",
    "display": "Z = \\sum _i e^(−\\beta E_i)",
    "desc": "Partition function • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-311",
    "name": "Entropy",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "S = k_B ln \\Omega ",
    "display": "S = k_B ln \\Omega ",
    "desc": "Entropy • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-312",
    "name": "Canonical probability",
    "category": "physics",
    "chapter": "Physics",
    "section": "2.8 Quantum, Relativity & Statistical Physics (University",
    "latex": "p_i = e^(−\\beta E_i)/Z",
    "display": "p_i = e^(−\\beta E_i)/Z",
    "desc": "Canonical probability • 2.8 Quantum, Relativity & Statistical Physics (University"
  },
  {
    "id": "hb-313",
    "name": "Moles",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "n = mass / molar mass",
    "display": "n = mass / molar mass",
    "desc": "Moles • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-314",
    "name": "Particles",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "N = nN_A",
    "display": "N = nN_A",
    "desc": "Particles • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-315",
    "name": "Molarity",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "M = moles of solute / litres of solution",
    "display": "M = moles of solute / litres of solution",
    "desc": "Molarity • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-316",
    "name": "Molality",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "m = moles of solute / kg of solvent",
    "display": "m = moles of solute / kg of solvent",
    "desc": "Molality • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-317",
    "name": "Mole fraction",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "χ_i = n_i/\\sum n_i",
    "display": "χ_i = n_i/\\sum n_i",
    "desc": "Mole fraction • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-318",
    "name": "Mass percent",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "\\%w/w = mass solute/mass solution \\times 100",
    "display": "\\%w/w = mass solute/mass solution \\times 100",
    "desc": "Mass percent • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-319",
    "name": "Molar gas volume",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "At specified conditions, V_m = V/n",
    "display": "At specified conditions, V_m = V/n",
    "desc": "Molar gas volume • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-320",
    "name": "Ideal gas",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "PV = nRT",
    "display": "PV = nRT",
    "desc": "Ideal gas • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-321",
    "name": "Density of ideal gas",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "\\rho  = PM/RT",
    "display": "\\rho  = PM/RT",
    "desc": "Density of ideal gas • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-322",
    "name": "Dilution",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.1 Mole, Stoichiometry & Solutions (Class 8",
    "latex": "M₁V₁ = M₂V₂",
    "display": "M₁V₁ = M₂V₂",
    "desc": "Dilution • 3.1 Mole, Stoichiometry & Solutions (Class 8"
  },
  {
    "id": "hb-323",
    "name": "Photon energy",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "E = hν = hc/\\lambda ",
    "display": "E = hν = hc/\\lambda ",
    "desc": "Photon energy • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-324",
    "name": "Bohr angular momentum",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "mvr = nh/(2\\pi ) = n\\hbar ",
    "display": "mvr = nh/(2\\pi ) = n\\hbar ",
    "desc": "Bohr angular momentum • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-325",
    "name": "Bohr radius",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "r_n = a₀ n^2/Z",
    "display": "r_n = a₀ n^2/Z",
    "desc": "Bohr radius • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-326",
    "name": "Hydrogen energy",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "E_n = −13.6 Z^2/n^2 eV",
    "display": "E_n = −13.6 Z^2/n^2 eV",
    "desc": "Hydrogen energy • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-327",
    "name": "Rydberg equation",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "1/\\lambda  = RZ^2(1/n₁^2−1/n₂^2)",
    "display": "1/\\lambda  = RZ^2(1/n₁^2−1/n₂^2)",
    "desc": "Rydberg equation • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-328",
    "name": "Radioactive decay",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "N = N₀e^(−\\lambda t)",
    "display": "N = N₀e^(−\\lambda t)",
    "desc": "Radioactive decay • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-329",
    "name": "Activity",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "A = \\lambda N",
    "display": "A = \\lambda N",
    "desc": "Activity • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-330",
    "name": "Half-life",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "t_1/2 = ln2/\\lambda ",
    "display": "t_1/2 = ln2/\\lambda ",
    "desc": "Half-life • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-331",
    "name": "Mean life",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "τ = 1/\\lambda ",
    "display": "τ = 1/\\lambda ",
    "desc": "Mean life • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-332",
    "name": "Mass-energy",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.2 Atomic Structure & Nuclear Chemistry (Class 10",
    "latex": "E = \\Delta mc^2",
    "display": "E = \\Delta mc^2",
    "desc": "Mass-energy • 3.2 Atomic Structure & Nuclear Chemistry (Class 10"
  },
  {
    "id": "hb-333",
    "name": "First law",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "\\Delta U = q + w",
    "display": "\\Delta U = q + w",
    "desc": "First law • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-334",
    "name": "PV work",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "w = −P_ext\\Delta V",
    "display": "w = −P_ext\\Delta V",
    "desc": "PV work • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-335",
    "name": "Enthalpy",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "H = U + PV",
    "display": "H = U + PV",
    "desc": "Enthalpy • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-336",
    "name": "Enthalpy change",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "\\Delta H = \\Delta U + \\Delta (PV)",
    "display": "\\Delta H = \\Delta U + \\Delta (PV)",
    "desc": "Enthalpy change • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-337",
    "name": "Gibbs energy",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "\\Delta G = \\Delta H − T\\Delta S",
    "display": "\\Delta G = \\Delta H − T\\Delta S",
    "desc": "Gibbs energy • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-338",
    "name": "Gibbs relation",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "\\Delta G° = −RT ln K",
    "display": "\\Delta G° = −RT ln K",
    "desc": "Gibbs relation • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-339",
    "name": "Entropy",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "\\Delta S = q_rev/T",
    "display": "\\Delta S = q_rev/T",
    "desc": "Entropy • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-340",
    "name": "Hess law",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "\\Delta H_rxn = \\sum \\Delta H_products − \\sum \\Delta H_reactants",
    "display": "\\Delta H_rxn = \\sum \\Delta H_products − \\sum \\Delta H_reactants",
    "desc": "Hess law • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-341",
    "name": "Heat capacity",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "q = nC\\Delta T",
    "display": "q = nC\\Delta T",
    "desc": "Heat capacity • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-342",
    "name": "van't Hoff",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.3 Thermochemistry & Thermodynamics (Class 11",
    "latex": "ln(K₂/K₁)=−\\Delta H°/R(1/T₂−1/T₁)",
    "display": "ln(K₂/K₁)=−\\Delta H°/R(1/T₂−1/T₁)",
    "desc": "van't Hoff • 3.3 Thermochemistry & Thermodynamics (Class 11"
  },
  {
    "id": "hb-343",
    "name": "Equilibrium constant",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "K_c = [products]^coeff/[reactants]^coeff",
    "display": "K_c = [products]^coeff/[reactants]^coeff",
    "desc": "Equilibrium constant • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-344",
    "name": "Gas equilibrium",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "K_p = K_c(RT)^\\Delta n",
    "display": "K_p = K_c(RT)^\\Delta n",
    "desc": "Gas equilibrium • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-345",
    "name": "pH",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "pH = −log[H⁺]",
    "display": "pH = −log[H⁺]",
    "desc": "pH • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-346",
    "name": "pOH",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "pOH = −log[OH⁻]",
    "display": "pOH = −log[OH⁻]",
    "desc": "pOH • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-347",
    "name": "Water",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "K_w = [H⁺][OH⁻]",
    "display": "K_w = [H⁺][OH⁻]",
    "desc": "Water • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-348",
    "name": "pH-pOH",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "pH + pOH = 14 at 25°C",
    "display": "pH + pOH = 14 at 25°C",
    "desc": "pH-pOH • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-349",
    "name": "Acid dissociation",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "K_a = [H⁺][A⁻]/[HA]",
    "display": "K_a = [H⁺][A⁻]/[HA]",
    "desc": "Acid dissociation • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-350",
    "name": "Base dissociation",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "K_b = [BH⁺][OH⁻]/[B]",
    "display": "K_b = [BH⁺][OH⁻]/[B]",
    "desc": "Base dissociation • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-351",
    "name": "Conjugate relation",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "K_aK_b = K_w",
    "display": "K_aK_b = K_w",
    "desc": "Conjugate relation • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-352",
    "name": "Henderson–Hasselbalch",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "pH = pK_a + log([A⁻]/[HA])",
    "display": "pH = pK_a + log([A⁻]/[HA])",
    "desc": "Henderson–Hasselbalch • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-353",
    "name": "Solubility product",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.4 Chemical Equilibrium, Acids & Bases (Class 11",
    "latex": "K_sp = product of ion concentrations raised to stoichiometric powers",
    "display": "K_sp = product of ion concentrations raised to stoichiometric powers",
    "desc": "Solubility product • 3.4 Chemical Equilibrium, Acids & Bases (Class 11"
  },
  {
    "id": "hb-354",
    "name": "Cell potential",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "E°cell = E°cathode − E°anode",
    "display": "E°cell = E°cathode − E°anode",
    "desc": "Cell potential • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-355",
    "name": "Nernst equation",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "E = E° − (RT/nF)lnQ",
    "display": "E = E° − (RT/nF)lnQ",
    "desc": "Nernst equation • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-356",
    "name": "At 25°C",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "E = E° − (0.05916/n)logQ",
    "display": "E = E° − (0.05916/n)logQ",
    "desc": "At 25°C • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-357",
    "name": "Free energy",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "\\Delta G = −nFE",
    "display": "\\Delta G = −nFE",
    "desc": "Free energy • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-358",
    "name": "Equilibrium relation",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "\\Delta G° = −nFE°",
    "display": "\\Delta G° = −nFE°",
    "desc": "Equilibrium relation • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-359",
    "name": "Charge",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "Q = It",
    "display": "Q = It",
    "desc": "Charge • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-360",
    "name": "Faraday law",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "m = (MIt)/(nF)",
    "display": "m = (MIt)/(nF)",
    "desc": "Faraday law • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-361",
    "name": "Rate law",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "rate = k[A]^m[B]^n",
    "display": "rate = k[A]^m[B]^n",
    "desc": "Rate law • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-362",
    "name": "First-order integrated law",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "ln([A]₀/[A]) = kt",
    "display": "ln([A]₀/[A]) = kt",
    "desc": "First-order integrated law • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-363",
    "name": "First-order half-life",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "t_1/2 = ln2/k",
    "display": "t_1/2 = ln2/k",
    "desc": "First-order half-life • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-364",
    "name": "Arrhenius",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "k = Ae^(−E_a/RT)",
    "display": "k = Ae^(−E_a/RT)",
    "desc": "Arrhenius • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-365",
    "name": "Arrhenius linear form",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.5 Electrochemistry & Kinetics (Class 11",
    "latex": "ln k = ln A − E_a/(RT)",
    "display": "ln k = ln A − E_a/(RT)",
    "desc": "Arrhenius linear form • 3.5 Electrochemistry & Kinetics (Class 11"
  },
  {
    "id": "hb-366",
    "name": "Degree of unsaturation",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "DBE = C − H/2 + N/2 + 1 (halogens counted as H; O/S ignored)",
    "display": "DBE = C − H/2 + N/2 + 1 (halogens counted as H; O/S ignored)",
    "desc": "Degree of unsaturation • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-367",
    "name": "Beer–Lambert law",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "A = \\varepsilon bc",
    "display": "A = \\varepsilon bc",
    "desc": "Beer–Lambert law • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-368",
    "name": "Absorbance",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "A = log₁₀(I₀/I)",
    "display": "A = log₁₀(I₀/I)",
    "desc": "Absorbance • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-369",
    "name": "Raoult law",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "P_i = x_iP_i°",
    "display": "P_i = x_iP_i°",
    "desc": "Raoult law • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-370",
    "name": "Henry law",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "P = k_H x",
    "display": "P = k_H x",
    "desc": "Henry law • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-371",
    "name": "Osmotic pressure",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "\\pi  = iCRT",
    "display": "\\pi  = iCRT",
    "desc": "Osmotic pressure • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-372",
    "name": "Elevation of boiling point",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "\\Delta T_b = iK_bm",
    "display": "\\Delta T_b = iK_bm",
    "desc": "Elevation of boiling point • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-373",
    "name": "Depression of freezing point",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "\\Delta T_f = iK_fm",
    "display": "\\Delta T_f = iK_fm",
    "desc": "Depression of freezing point • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-374",
    "name": "Clausius–Clapeyron",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "ln(P₂/P₁)=−\\Delta H_vap/R(1/T₂−1/T₁)",
    "display": "ln(P₂/P₁)=−\\Delta H_vap/R(1/T₂−1/T₁)",
    "desc": "Clausius–Clapeyron • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-375",
    "name": "Chemical potential",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "\\mu _i = \\mu _i° + RT ln a_i",
    "display": "\\mu _i = \\mu _i° + RT ln a_i",
    "desc": "Chemical potential • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-376",
    "name": "Fugacity form",
    "category": "chemistry",
    "chapter": "Chemistry",
    "section": "3.6 Organic & Physical Chemistry (University",
    "latex": "\\mu  = \\mu ° + RT ln(f/f°)",
    "display": "\\mu  = \\mu ° + RT ln(f/f°)",
    "desc": "Fugacity form • 3.6 Organic & Physical Chemistry (University"
  },
  {
    "id": "hb-377",
    "name": "Magnification",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.1 Core Quantitative Biology (Class 6",
    "latex": "M = image size/object size",
    "display": "M = image size/object size",
    "desc": "Magnification • 4.1 Core Quantitative Biology (Class 6"
  },
  {
    "id": "hb-378",
    "name": "Population density",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.1 Core Quantitative Biology (Class 6",
    "latex": "Density = Number of individuals/Area or volume",
    "display": "Density = Number of individuals/Area or volume",
    "desc": "Population density • 4.1 Core Quantitative Biology (Class 6"
  },
  {
    "id": "hb-379",
    "name": "Growth rate",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.1 Core Quantitative Biology (Class 6",
    "latex": "Growth rate = (final−initial)/time",
    "display": "Growth rate = (final−initial)/time",
    "desc": "Growth rate • 4.1 Core Quantitative Biology (Class 6"
  },
  {
    "id": "hb-380",
    "name": "Percent change",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.1 Core Quantitative Biology (Class 6",
    "latex": "\\% change = (new−old)/old \\times 100",
    "display": "\\% change = (new−old)/old \\times 100",
    "desc": "Percent change • 4.1 Core Quantitative Biology (Class 6"
  },
  {
    "id": "hb-381",
    "name": "Surface area to volume",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.1 Core Quantitative Biology (Class 6",
    "latex": "SA:V = surface area/volume",
    "display": "SA:V = surface area/volume",
    "desc": "Surface area to volume • 4.1 Core Quantitative Biology (Class 6"
  },
  {
    "id": "hb-382",
    "name": "BMI (health metric)",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.1 Core Quantitative Biology (Class 6",
    "latex": "BMI = mass(kg)/height(m)^2",
    "display": "BMI = mass(kg)/height(m)^2",
    "desc": "BMI (health metric) • 4.1 Core Quantitative Biology (Class 6"
  },
  {
    "id": "hb-383",
    "name": "Hardy–Weinberg",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "p + q = 1",
    "display": "p + q = 1",
    "desc": "Hardy–Weinberg • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-384",
    "name": "Hardy–Weinberg genotype",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "p^2 + 2pq + q^2 = 1",
    "display": "p^2 + 2pq + q^2 = 1",
    "desc": "Hardy–Weinberg genotype • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-385",
    "name": "Allele frequency",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "p = 2N_AA + N_Aa / 2N",
    "display": "p = 2N_AA + N_Aa / 2N",
    "desc": "Allele frequency • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-386",
    "name": "Recombination frequency",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "RF = recombinant offspring/total offspring \\times 100\\%",
    "display": "RF = recombinant offspring/total offspring \\times 100\\%",
    "desc": "Recombination frequency • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-387",
    "name": "DNA base pairing",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "A=T; G≡C",
    "display": "A=T; G≡C",
    "desc": "DNA base pairing • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-388",
    "name": "GC fraction",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "GC\\% = (G+C)/total bases \\times 100",
    "display": "GC\\% = (G+C)/total bases \\times 100",
    "desc": "GC fraction • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-389",
    "name": "PCR amplification ideal",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "Copies \\approx  initial copies \\times  2^cycles",
    "display": "Copies \\approx  initial copies \\times  2^cycles",
    "desc": "PCR amplification ideal • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-390",
    "name": "Michaelis–Menten",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "v = V_max[S]/(K_m+[S])",
    "display": "v = V_max[S]/(K_m+[S])",
    "desc": "Michaelis–Menten • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-391",
    "name": "Catalytic efficiency",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "k_cat/K_m",
    "display": "k_cat/K_m",
    "desc": "Catalytic efficiency • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-392",
    "name": "Hill equation",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.2 Genetics & Molecular Biology (Class 11",
    "latex": "\\theta  = [L]^n/(K_d + [L]^n)",
    "display": "\\theta  = [L]^n/(K_d + [L]^n)",
    "desc": "Hill equation • 4.2 Genetics & Molecular Biology (Class 11"
  },
  {
    "id": "hb-393",
    "name": "Exponential growth",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.3 Biostatistics & Population Biology (University",
    "latex": "dN/dt = rN",
    "display": "dN/dt = rN",
    "desc": "Exponential growth • 4.3 Biostatistics & Population Biology (University"
  },
  {
    "id": "hb-394",
    "name": "Exponential solution",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.3 Biostatistics & Population Biology (University",
    "latex": "N_t = N₀e^(rt)",
    "display": "N_t = N₀e^(rt)",
    "desc": "Exponential solution • 4.3 Biostatistics & Population Biology (University"
  },
  {
    "id": "hb-395",
    "name": "Logistic growth",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.3 Biostatistics & Population Biology (University",
    "latex": "dN/dt = rN(1−N/K)",
    "display": "dN/dt = rN(1−N/K)",
    "desc": "Logistic growth • 4.3 Biostatistics & Population Biology (University"
  },
  {
    "id": "hb-396",
    "name": "Logistic solution",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.3 Biostatistics & Population Biology (University",
    "latex": "N(t)=K/[1+((K−N₀)/N₀)e^(−rt)]",
    "display": "N(t)=K/[1+((K−N₀)/N₀)e^(−rt)]",
    "desc": "Logistic solution • 4.3 Biostatistics & Population Biology (University"
  },
  {
    "id": "hb-397",
    "name": "Basic reproduction number",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.3 Biostatistics & Population Biology (University",
    "latex": "R₀ = expected secondary cases from one primary case in a fully susceptible population",
    "display": "R₀ = expected secondary cases from one primary case in a fully susceptible population",
    "desc": "Basic reproduction number • 4.3 Biostatistics & Population Biology (University"
  },
  {
    "id": "hb-398",
    "name": "Relative risk",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.3 Biostatistics & Population Biology (University",
    "latex": "RR = risk_exposed/risk_unexposed",
    "display": "RR = risk_exposed/risk_unexposed",
    "desc": "Relative risk • 4.3 Biostatistics & Population Biology (University"
  },
  {
    "id": "hb-399",
    "name": "Odds ratio",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.3 Biostatistics & Population Biology (University",
    "latex": "OR = (ad/bc) for a 2\\times 2 table",
    "display": "OR = (ad/bc) for a 2\\times 2 table",
    "desc": "Odds ratio • 4.3 Biostatistics & Population Biology (University"
  },
  {
    "id": "hb-400",
    "name": "Hazard ratio",
    "category": "biology",
    "chapter": "Biology",
    "section": "4.3 Biostatistics & Population Biology (University",
    "latex": "HR = hazard(t|group1)/hazard(t|group2)",
    "display": "HR = hazard(t|group1)/hazard(t|group2)",
    "desc": "Hazard ratio • 4.3 Biostatistics & Population Biology (University"
  },
  {
    "id": "hb-401",
    "name": "Arithmetic mean",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.1 Descriptive Statistics (Class 9",
    "latex": "\\bar{x} = \\sum x_i/n",
    "display": "\\bar{x} = \\sum x_i/n",
    "desc": "Arithmetic mean • 5.1 Descriptive Statistics (Class 9"
  },
  {
    "id": "hb-402",
    "name": "Median",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.1 Descriptive Statistics (Class 9",
    "latex": "Middle ordered value (or mean of two middle values)",
    "display": "Middle ordered value (or mean of two middle values)",
    "desc": "Median • 5.1 Descriptive Statistics (Class 9"
  },
  {
    "id": "hb-403",
    "name": "Range",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.1 Descriptive Statistics (Class 9",
    "latex": "Range = max−min",
    "display": "Range = max−min",
    "desc": "Range • 5.1 Descriptive Statistics (Class 9"
  },
  {
    "id": "hb-404",
    "name": "Population variance",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.1 Descriptive Statistics (Class 9",
    "latex": "\\sigma ^2 = \\sum (x_i−\\mu )^2/N",
    "display": "\\sigma ^2 = \\sum (x_i−\\mu )^2/N",
    "desc": "Population variance • 5.1 Descriptive Statistics (Class 9"
  },
  {
    "id": "hb-405",
    "name": "Sample variance",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.1 Descriptive Statistics (Class 9",
    "latex": "s^2 = \\sum (x_i−\\bar{x})^2/(n−1)",
    "display": "s^2 = \\sum (x_i−\\bar{x})^2/(n−1)",
    "desc": "Sample variance • 5.1 Descriptive Statistics (Class 9"
  },
  {
    "id": "hb-406",
    "name": "Standard deviation",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.1 Descriptive Statistics (Class 9",
    "latex": "s = \\\\text{sqrts}^2",
    "display": "s = \\\\text{sqrts}^2",
    "desc": "Standard deviation • 5.1 Descriptive Statistics (Class 9"
  },
  {
    "id": "hb-407",
    "name": "Coefficient of variation",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.1 Descriptive Statistics (Class 9",
    "latex": "CV = s/\\bar{x} \\times 100\\%",
    "display": "CV = s/\\bar{x} \\times 100\\%",
    "desc": "Coefficient of variation • 5.1 Descriptive Statistics (Class 9"
  },
  {
    "id": "hb-408",
    "name": "Standard error of mean",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "SE(\\\\text{bar}{x}) = \\\\sigma /\\\\text{sqrtn} (or s/\\\\text{sqrtn})",
    "display": "SE(\\\\text{bar}{x}) = \\\\sigma /\\\\text{sqrtn} (or s/\\\\text{sqrtn})",
    "desc": "Standard error of mean • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-409",
    "name": "z statistic",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "z = (\\\\text{bar}{x}−\\mu ₀)/(\\\\sigma /\\\\text{sqrtn})",
    "display": "z = (\\\\text{bar}{x}−\\mu ₀)/(\\\\sigma /\\\\text{sqrtn})",
    "desc": "z statistic • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-410",
    "name": "t statistic",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "t = (\\\\text{bar}{x}−\\mu ₀)/(s/\\\\text{sqrtn})",
    "display": "t = (\\\\text{bar}{x}−\\mu ₀)/(s/\\\\text{sqrtn})",
    "desc": "t statistic • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-411",
    "name": "Confidence interval",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "estimate \\pm  critical value \\times  SE",
    "display": "estimate \\pm  critical value \\times  SE",
    "desc": "Confidence interval • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-412",
    "name": "One-proportion z",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "z=(p̂−p₀)/\\\\sqrt[p₀(1−p₀)/n]",
    "display": "z=(p̂−p₀)/\\\\sqrt[p₀(1−p₀)/n]",
    "desc": "One-proportion z • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-413",
    "name": "Pearson correlation",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "r = \\\\sum [(x−\\\\text{bar}{x})(y−\\\\text{bar}{y})]/\\\\sqrt[\\\\sum (x−\\\\text{bar}{x})^2\\\\sum (y−\\\\text{bar}{y})^2]",
    "display": "r = \\\\sum [(x−\\\\text{bar}{x})(y−\\\\text{bar}{y})]/\\\\sqrt[\\\\sum (x−\\\\text{bar}{x})^2\\\\sum (y−\\\\text{bar}{y})^2]",
    "desc": "Pearson correlation • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-414",
    "name": "Simple regression",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "\\hat{y} = \\beta ₀ + \\beta ₁x",
    "display": "\\hat{y} = \\beta ₀ + \\beta ₁x",
    "desc": "Simple regression • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-415",
    "name": "Slope",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "\\beta ₁ = Cov(X,Y)/Var(X)",
    "display": "\\beta ₁ = Cov(X,Y)/Var(X)",
    "desc": "Slope • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-416",
    "name": "R-squared",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "R^2 = 1 − SSE/SST",
    "display": "R^2 = 1 − SSE/SST",
    "desc": "R-squared • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-417",
    "name": "Logistic regression",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "log[p/(1−p)] = \\beta ₀ + \\beta ᵀx",
    "display": "log[p/(1−p)] = \\beta ₀ + \\beta ᵀx",
    "desc": "Logistic regression • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-418",
    "name": "MLE",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "\\text{theta ̂ = argmax_theta  L(theta |data)}",
    "display": "\\text{theta ̂ = argmax_theta  L(theta |data)}",
    "desc": "MLE • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-419",
    "name": "Bayes posterior",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "p(\\theta |D) ∝ p(D|\\theta )p(\\theta )",
    "display": "p(\\theta |D) ∝ p(D|\\theta )p(\\theta )",
    "desc": "Bayes posterior • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-420",
    "name": "AIC",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "AIC = 2k − 2ln(L̂)",
    "display": "AIC = 2k − 2ln(L̂)",
    "desc": "AIC • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-421",
    "name": "BIC",
    "category": "stats",
    "chapter": "Statistics & Data Science",
    "section": "5.2 Inference & Regression (University",
    "latex": "BIC = k ln(n) − 2ln(L̂)",
    "display": "BIC = k ln(n) − 2ln(L̂)",
    "desc": "BIC • 5.2 Inference & Regression (University"
  },
  {
    "id": "hb-422",
    "name": "Binary to decimal",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.1 Algorithms & Discrete Math (Class 6",
    "latex": "N = \\sum  b_i 2^i",
    "display": "N = \\sum  b_i 2^i",
    "desc": "Binary to decimal • 6.1 Algorithms & Discrete Math (Class 6"
  },
  {
    "id": "hb-423",
    "name": "Arithmetic series",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.1 Algorithms & Discrete Math (Class 6",
    "latex": "S_n = n(a+l)/2",
    "display": "S_n = n(a+l)/2",
    "desc": "Arithmetic series • 6.1 Algorithms & Discrete Math (Class 6"
  },
  {
    "id": "hb-424",
    "name": "Geometric series",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.1 Algorithms & Discrete Math (Class 6",
    "latex": "S_n = a(r^n−1)/(r−1)",
    "display": "S_n = a(r^n−1)/(r−1)",
    "desc": "Geometric series • 6.1 Algorithms & Discrete Math (Class 6"
  },
  {
    "id": "hb-427",
    "name": "Graph handshaking",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.1 Algorithms & Discrete Math (Class 6",
    "latex": "\\sum  deg(v) = 2|E|",
    "display": "\\sum  deg(v) = 2|E|",
    "desc": "Graph handshaking • 6.1 Algorithms & Discrete Math (Class 6"
  },
  {
    "id": "hb-428",
    "name": "Complete graph edges",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.1 Algorithms & Discrete Math (Class 6",
    "latex": "|E(K_n)| = n(n−1)/2",
    "display": "|E(K_n)| = n(n−1)/2",
    "desc": "Complete graph edges • 6.1 Algorithms & Discrete Math (Class 6"
  },
  {
    "id": "hb-429",
    "name": "Tree edges",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.1 Algorithms & Discrete Math (Class 6",
    "latex": "|E| = |V|−1",
    "display": "|E| = |V|−1",
    "desc": "Tree edges • 6.1 Algorithms & Discrete Math (Class 6"
  },
  {
    "id": "hb-430",
    "name": "Binary tree max nodes",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.1 Algorithms & Discrete Math (Class 6",
    "latex": "Max nodes at depth d = 2^d",
    "display": "Max nodes at depth d = 2^d",
    "desc": "Binary tree max nodes • 6.1 Algorithms & Discrete Math (Class 6"
  },
  {
    "id": "hb-431",
    "name": "Binary tree max nodes",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.1 Algorithms & Discrete Math (Class 6",
    "latex": "Max nodes with height h (root height 0) = 2^(h+1)−1",
    "display": "Max nodes with height h (root height 0) = 2^(h+1)−1",
    "desc": "Binary tree max nodes • 6.1 Algorithms & Discrete Math (Class 6"
  },
  {
    "id": "hb-432",
    "name": "Binary search",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "T(n)=T(n/2)+O(1) = O(log n)",
    "display": "T(n)=T(n/2)+O(1) = O(log n)",
    "desc": "Binary search • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-433",
    "name": "Merge sort",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "T(n)=2T(n/2)+O(n) = O(n log n)",
    "display": "T(n)=2T(n/2)+O(n) = O(n log n)",
    "desc": "Merge sort • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-434",
    "name": "Quick sort average",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "O(n log n) average; O(n^2) worst case",
    "display": "O(n log n) average; O(n^2) worst case",
    "desc": "Quick sort average • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-435",
    "name": "Hash table average",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "Search/insert/delete \\approx  O(1) average under good hashing",
    "display": "Search/insert/delete \\approx  O(1) average under good hashing",
    "desc": "Hash table average • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-436",
    "name": "Entropy",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "H(X)=−\\sum  p(x)log₂p(x)",
    "display": "H(X)=−\\sum  p(x)log₂p(x)",
    "desc": "Entropy • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-437",
    "name": "Joint entropy",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "H(X,Y)=−\\sum p(x,y)log₂p(x,y)",
    "display": "H(X,Y)=−\\sum p(x,y)log₂p(x,y)",
    "desc": "Joint entropy • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-438",
    "name": "Mutual information",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "I(X;Y)=\\sum p(x,y)log[p(x,y)/(p(x)p(y))]",
    "display": "I(X;Y)=\\sum p(x,y)log[p(x,y)/(p(x)p(y))]",
    "desc": "Mutual information • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-439",
    "name": "Cross entropy",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "H(p,q)=−\\sum p(x)log q(x)",
    "display": "H(p,q)=−\\sum p(x)log q(x)",
    "desc": "Cross entropy • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-440",
    "name": "KL divergence",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "D_KL(p||q)=\\sum p(x)log[p(x)/q(x)]",
    "display": "D_KL(p||q)=\\sum p(x)log[p(x)/q(x)]",
    "desc": "KL divergence • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-441",
    "name": "Linear regression loss",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "MSE=(1/n)\\sum (y_i−\\hat{y}_i)^2",
    "display": "MSE=(1/n)\\sum (y_i−\\hat{y}_i)^2",
    "desc": "Linear regression loss • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-442",
    "name": "Gradient descent",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "\\theta _{t+1}=\\theta _t−η\\nabla J(\\theta _t)",
    "display": "\\theta _{t+1}=\\theta _t−η\\nabla J(\\theta _t)",
    "desc": "Gradient descent • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-443",
    "name": "Softmax",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "softmax(z_i)=e^{z_i}/\\sum _j e^{z_j}",
    "display": "softmax(z_i)=e^{z_i}/\\sum _j e^{z_j}",
    "desc": "Softmax • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-444",
    "name": "Sigmoid",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "\\sigma (z)=1/(1+e^(−z))",
    "display": "\\sigma (z)=1/(1+e^(−z))",
    "desc": "Sigmoid • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-445",
    "name": "ReLU",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "ReLU(x)=max(0,x)",
    "display": "ReLU(x)=max(0,x)",
    "desc": "ReLU • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-446",
    "name": "Attention",
    "category": "cs",
    "chapter": "Computer Science",
    "section": "6.2 Complexity, Information & ML (University",
    "latex": "\\text{Attention}(Q,K,V)=\\text{softmax}(QKᵀ/\\\\text{sqrtd}_k)V",
    "display": "\\text{Attention}(Q,K,V)=\\text{softmax}(QKᵀ/\\\\text{sqrtd}_k)V",
    "desc": "Attention • 6.2 Complexity, Information & ML (University"
  },
  {
    "id": "hb-447",
    "name": "Kirchhoff current law",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "\\sum I = 0 at a node",
    "display": "\\sum I = 0 at a node",
    "desc": "Kirchhoff current law • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-448",
    "name": "Kirchhoff voltage law",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "\\sum V = 0 around a loop",
    "display": "\\sum V = 0 around a loop",
    "desc": "Kirchhoff voltage law • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-449",
    "name": "RMS sinusoid",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "V_rms = V_peak/\\sqrt2",
    "display": "V_rms = V_peak/\\sqrt2",
    "desc": "RMS sinusoid • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-450",
    "name": "AC impedance resistor",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "Z_R = R",
    "display": "Z_R = R",
    "desc": "AC impedance resistor • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-451",
    "name": "AC impedance inductor",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "Z_L = j\\omega L",
    "display": "Z_L = j\\omega L",
    "desc": "AC impedance inductor • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-452",
    "name": "AC impedance capacitor",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "Z_C = 1/(j\\omega C)",
    "display": "Z_C = 1/(j\\omega C)",
    "desc": "AC impedance capacitor • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-453",
    "name": "Series RLC",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "Z = R + j(\\omega L−1/(\\omega C))",
    "display": "Z = R + j(\\omega L−1/(\\omega C))",
    "desc": "Series RLC • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-454",
    "name": "Resonance",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "\\omega ₀ = 1/\\sqrt(LC)",
    "display": "\\omega ₀ = 1/\\sqrt(LC)",
    "desc": "Resonance • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-455",
    "name": "Transformer ratio",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "V_s/V_p = N_s/N_p",
    "display": "V_s/V_p = N_s/N_p",
    "desc": "Transformer ratio • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-456",
    "name": "Ideal transformer current ratio",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "I_s/I_p = N_p/N_s",
    "display": "I_s/I_p = N_p/N_s",
    "desc": "Ideal transformer current ratio • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-457",
    "name": "Power factor",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "pf = cosφ",
    "display": "pf = cosφ",
    "desc": "Power factor • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-458",
    "name": "Three-phase power",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "P = \\sqrt3 V_L I_L cosφ",
    "display": "P = \\sqrt3 V_L I_L cosφ",
    "desc": "Three-phase power • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-459",
    "name": "Capacitor reactance",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "X_C = 1/(\\omega C)",
    "display": "X_C = 1/(\\omega C)",
    "desc": "Capacitor reactance • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-460",
    "name": "Inductor reactance",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.1 Electrical & Electronics (University)",
    "latex": "X_L = \\omega L",
    "display": "X_L = \\omega L",
    "desc": "Inductor reactance • 7.1 Electrical & Electronics (University)"
  },
  {
    "id": "hb-461",
    "name": "Normal stress",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "\\sigma  = F/A",
    "display": "\\sigma  = F/A",
    "desc": "Normal stress • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-462",
    "name": "Normal strain",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "\\varepsilon  = \\Delta L/L",
    "display": "\\varepsilon  = \\Delta L/L",
    "desc": "Normal strain • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-463",
    "name": "Hooke law",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "\\sigma  = E\\varepsilon ",
    "display": "\\sigma  = E\\varepsilon ",
    "desc": "Hooke law • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-464",
    "name": "Shear stress",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "τ = V/A",
    "display": "τ = V/A",
    "desc": "Shear stress • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-465",
    "name": "Bending stress",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "\\sigma  = My/I",
    "display": "\\sigma  = My/I",
    "desc": "Bending stress • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-466",
    "name": "Torsion",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "τ = Tr/J",
    "display": "τ = Tr/J",
    "desc": "Torsion • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-467",
    "name": "Beam curvature",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "M/EI = 1/R",
    "display": "M/EI = 1/R",
    "desc": "Beam curvature • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-468",
    "name": "Euler buckling",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "P_cr = \\pi ^2EI/(KL)^2",
    "display": "P_cr = \\pi ^2EI/(KL)^2",
    "desc": "Euler buckling • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-469",
    "name": "Factor of safety",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "FoS = Failure load/Working load",
    "display": "FoS = Failure load/Working load",
    "desc": "Factor of safety • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-470",
    "name": "Fluid Reynolds number",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "Re = \\rho vD/\\mu  = vD/ν",
    "display": "Re = \\rho vD/\\mu  = vD/ν",
    "desc": "Fluid Reynolds number • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-471",
    "name": "Froude number",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "Fr = v/\\sqrt(gL)",
    "display": "Fr = v/\\sqrt(gL)",
    "desc": "Froude number • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-472",
    "name": "Mach number",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "Ma = v/a",
    "display": "Ma = v/a",
    "desc": "Mach number • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-473",
    "name": "Hydraulic power",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "P = \\rho gQH",
    "display": "P = \\rho gQH",
    "desc": "Hydraulic power • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-474",
    "name": "Continuity",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "Q = Av",
    "display": "Q = Av",
    "desc": "Continuity • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-475",
    "name": "Darcy–Weisbach",
    "category": "engineering",
    "chapter": "Engineering",
    "section": "7.2 Mechanical & Civil Engineering (University)",
    "latex": "h_f = f(L/D)(v^2/(2g))",
    "display": "h_f = f(L/D)(v^2/(2g))",
    "desc": "Darcy–Weisbach • 7.2 Mechanical & Civil Engineering (University)"
  },
  {
    "id": "hb-477",
    "name": "Compound amount",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.1 Core Finance (Class 9",
    "latex": "A = P(1+r)^n",
    "display": "A = P(1+r)^n",
    "desc": "Compound amount • 8.1 Core Finance (Class 9"
  },
  {
    "id": "hb-478",
    "name": "Present value",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.1 Core Finance (Class 9",
    "latex": "PV = FV/(1+r)^n",
    "display": "PV = FV/(1+r)^n",
    "desc": "Present value • 8.1 Core Finance (Class 9"
  },
  {
    "id": "hb-479",
    "name": "Future value",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.1 Core Finance (Class 9",
    "latex": "FV = PV(1+r)^n",
    "display": "FV = PV(1+r)^n",
    "desc": "Future value • 8.1 Core Finance (Class 9"
  },
  {
    "id": "hb-480",
    "name": "Simple annuity PV",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.1 Core Finance (Class 9",
    "latex": "PV = PMT[1−(1+r)^−n]/r",
    "display": "PV = PMT[1−(1+r)^−n]/r",
    "desc": "Simple annuity PV • 8.1 Core Finance (Class 9"
  },
  {
    "id": "hb-481",
    "name": "Annuity FV",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.1 Core Finance (Class 9",
    "latex": "FV = PMT[(1+r)^n−1]/r",
    "display": "FV = PMT[(1+r)^n−1]/r",
    "desc": "Annuity FV • 8.1 Core Finance (Class 9"
  },
  {
    "id": "hb-482",
    "name": "Real interest approximation",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.1 Core Finance (Class 9",
    "latex": "Real rate \\approx  Nominal rate − Inflation rate",
    "display": "Real rate \\approx  Nominal rate − Inflation rate",
    "desc": "Real interest approximation • 8.1 Core Finance (Class 9"
  },
  {
    "id": "hb-483",
    "name": "Percentage change",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.1 Core Finance (Class 9",
    "latex": "\\%\\Delta  = (new−old)/old \\times 100\\%",
    "display": "\\%\\Delta  = (new−old)/old \\times 100\\%",
    "desc": "Percentage change • 8.1 Core Finance (Class 9"
  },
  {
    "id": "hb-484",
    "name": "GDP expenditure",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "Y = C + I + G + NX",
    "display": "Y = C + I + G + NX",
    "desc": "GDP expenditure • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-485",
    "name": "National income identity",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "Y = C + S + T",
    "display": "Y = C + S + T",
    "desc": "National income identity • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-486",
    "name": "Money identity",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "MV = PY",
    "display": "MV = PY",
    "desc": "Money identity • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-487",
    "name": "Inflation rate",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "\\pi  = (P_t−P_{t−1})/P_{t−1}",
    "display": "\\pi  = (P_t−P_{t−1})/P_{t−1}",
    "desc": "Inflation rate • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-488",
    "name": "Elasticity",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "\\varepsilon  = (\\%\\Delta Q)/(\\%\\Delta P)",
    "display": "\\varepsilon  = (\\%\\Delta Q)/(\\%\\Delta P)",
    "desc": "Elasticity • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-489",
    "name": "Price elasticity point",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "\\varepsilon  = (dQ/dP)(P/Q)",
    "display": "\\varepsilon  = (dQ/dP)(P/Q)",
    "desc": "Price elasticity point • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-490",
    "name": "Marginal cost",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "MC = dTC/dQ",
    "display": "MC = dTC/dQ",
    "desc": "Marginal cost • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-491",
    "name": "Marginal revenue",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "MR = dTR/dQ",
    "display": "MR = dTR/dQ",
    "desc": "Marginal revenue • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-492",
    "name": "Profit",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "\\pi  = TR−TC",
    "display": "\\pi  = TR−TC",
    "desc": "Profit • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-493",
    "name": "Profit maximization",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "MR = MC",
    "display": "MR = MC",
    "desc": "Profit maximization • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-494",
    "name": "Cobb–Douglas",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "Y = AK^\\alpha L^(1−\\alpha )",
    "display": "Y = AK^\\alpha L^(1−\\alpha )",
    "desc": "Cobb–Douglas • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-495",
    "name": "Solow capital accumulation",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "k = sf(k) − (n+g+\\delta )k",
    "display": "k = sf(k) − (n+g+\\delta )k",
    "desc": "Solow capital accumulation • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-496",
    "name": "IS identity",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "Y = C(Y−T)+I(r)+G+NX",
    "display": "Y = C(Y−T)+I(r)+G+NX",
    "desc": "IS identity • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-497",
    "name": "CAPM",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "E[R_i]=R_f+\\beta _i(E[R_m]−R_f)",
    "display": "E[R_i]=R_f+\\beta _i(E[R_m]−R_f)",
    "desc": "CAPM • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-498",
    "name": "Portfolio return",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "E[R_p]=\\sum w_iE[R_i]",
    "display": "E[R_p]=\\sum w_iE[R_i]",
    "desc": "Portfolio return • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-499",
    "name": "Portfolio variance",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "\\sigma _p^2 = wᵀ\\sum w",
    "display": "\\sigma _p^2 = wᵀ\\sum w",
    "desc": "Portfolio variance • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-500",
    "name": "Sharpe ratio",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "S=(E[R_p]−R_f)/\\sigma _p",
    "display": "S=(E[R_p]−R_f)/\\sigma _p",
    "desc": "Sharpe ratio • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-501",
    "name": "Black–Scholes call",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "C = SN(d₁) − Ke^(−rT)N(d₂)",
    "display": "C = SN(d₁) − Ke^(−rT)N(d₂)",
    "desc": "Black–Scholes call • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-502",
    "name": "d1",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "d₁=[ln(S/K)+(r+\\\\sigma ^2/2)T]/(\\\\sigma \\\\text{sqrtT})",
    "display": "d₁=[ln(S/K)+(r+\\\\sigma ^2/2)T]/(\\\\sigma \\\\text{sqrtT})",
    "desc": "d1 • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-503",
    "name": "d2",
    "category": "finance",
    "chapter": "Economics & Finance",
    "section": "8.2 Macroeconomics & Quantitative Economics (University",
    "latex": "d₂=d₁−\\\\sigma \\\\text{sqrtT}",
    "display": "d₂=d₁−\\\\sigma \\\\text{sqrtT}",
    "desc": "d2 • 8.2 Macroeconomics & Quantitative Economics (University"
  },
  {
    "id": "hb-504",
    "name": "Pressure",
    "category": "earth",
    "chapter": "Earth & Environmental Science",
    "section": "9.1 Core Quantitative Earth Science (Class 6",
    "latex": "P = F/A",
    "display": "P = F/A",
    "desc": "Pressure • 9.1 Core Quantitative Earth Science (Class 6"
  },
  {
    "id": "hb-506",
    "name": "Relative humidity",
    "category": "earth",
    "chapter": "Earth & Environmental Science",
    "section": "9.1 Core Quantitative Earth Science (Class 6",
    "latex": "RH = actual vapour pressure/saturation vapour pressure \\times 100\\%",
    "display": "RH = actual vapour pressure/saturation vapour pressure \\times 100\\%",
    "desc": "Relative humidity • 9.1 Core Quantitative Earth Science (Class 6"
  },
  {
    "id": "hb-507",
    "name": "Hydrological balance",
    "category": "earth",
    "chapter": "Earth & Environmental Science",
    "section": "9.1 Core Quantitative Earth Science (Class 6",
    "latex": "P = ET + R + \\Delta S",
    "display": "P = ET + R + \\Delta S",
    "desc": "Hydrological balance • 9.1 Core Quantitative Earth Science (Class 6"
  },
  {
    "id": "hb-508",
    "name": "Population growth",
    "category": "earth",
    "chapter": "Earth & Environmental Science",
    "section": "9.1 Core Quantitative Earth Science (Class 6",
    "latex": "Growth rate = births + immigration − deaths − emigration",
    "display": "Growth rate = births + immigration − deaths − emigration",
    "desc": "Population growth • 9.1 Core Quantitative Earth Science (Class 6"
  },
  {
    "id": "hb-509",
    "name": "Carbon concentration conversion",
    "category": "earth",
    "chapter": "Earth & Environmental Science",
    "section": "9.1 Core Quantitative Earth Science (Class 6",
    "latex": "ppm = parts of component per million parts of mixture",
    "display": "ppm = parts of component per million parts of mixture",
    "desc": "Carbon concentration conversion • 9.1 Core Quantitative Earth Science (Class 6"
  },
  {
    "id": "hb-510",
    "name": "Heat diffusion",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "\\partial T/\\partial t = \\alpha \\nabla ^2T",
    "display": "\\partial T/\\partial t = \\alpha \\nabla ^2T",
    "desc": "Heat diffusion • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-511",
    "name": "Advection-diffusion",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "\\partial C/\\partial t + u·\\nabla C = D\\nabla ^2C + R",
    "display": "\\partial C/\\partial t + u·\\nabla C = D\\nabla ^2C + R",
    "desc": "Advection-diffusion • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-512",
    "name": "Radiative flux",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "F = \\sigma T^4",
    "display": "F = \\sigma T^4",
    "desc": "Radiative flux • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-513",
    "name": "Stefan–Boltzmann",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "P = \\varepsilon \\sigma AT^4",
    "display": "P = \\varepsilon \\sigma AT^4",
    "desc": "Stefan–Boltzmann • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-514",
    "name": "Wien displacement",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "\\lambda _max T = b",
    "display": "\\lambda _max T = b",
    "desc": "Wien displacement • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-515",
    "name": "Hydraulic gradient",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "i = \\Delta h/L",
    "display": "i = \\Delta h/L",
    "desc": "Hydraulic gradient • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-516",
    "name": "Darcy law",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "q = −K\\nabla h",
    "display": "q = −K\\nabla h",
    "desc": "Darcy law • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-517",
    "name": "Richards equation",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "\\partial \\theta /\\partial t = \\nabla ·[K(\\theta )\\nabla (h+z)]",
    "display": "\\partial \\theta /\\partial t = \\nabla ·[K(\\theta )\\nabla (h+z)]",
    "desc": "Richards equation • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-518",
    "name": "Seismic wave speed P",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "v_P = \\\\sqrt[(K + 4\\mu /3)/\\\\text{rho} ]",
    "display": "v_P = \\\\sqrt[(K + 4\\mu /3)/\\\\text{rho} ]",
    "desc": "Seismic wave speed P • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-519",
    "name": "Seismic wave speed S",
    "category": "physics",
    "chapter": "Earth & Environmental Science",
    "section": "9.2 Geophysics & Climate (University",
    "latex": "v_S = \\sqrt(\\mu /\\rho )",
    "display": "v_S = \\sqrt(\\mu /\\rho )",
    "desc": "Seismic wave speed S • 9.2 Geophysics & Climate (University"
  },
  {
    "id": "hb-520",
    "name": "Cardiac output",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "CO = HR \\times  SV",
    "display": "CO = HR \\times  SV",
    "desc": "Cardiac output • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-521",
    "name": "Mean arterial pressure approximation",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "MAP \\approx  DBP + (SBP−DBP)/3",
    "display": "MAP \\approx  DBP + (SBP−DBP)/3",
    "desc": "Mean arterial pressure approximation • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-522",
    "name": "Body mass index",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "BMI = mass(kg)/height(m)^2",
    "display": "BMI = mass(kg)/height(m)^2",
    "desc": "Body mass index • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-523",
    "name": "Oxygen delivery",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "D_O2 = CO \\times  C_aO2 \\times  constant",
    "display": "D_O2 = CO \\times  C_aO2 \\times  constant",
    "desc": "Oxygen delivery • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-524",
    "name": "Alveolar ventilation",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "V_A = (V_T−V_D)f",
    "display": "V_A = (V_T−V_D)f",
    "desc": "Alveolar ventilation • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-526",
    "name": "Clearance",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "CL = Rate of elimination / Plasma concentration",
    "display": "CL = Rate of elimination / Plasma concentration",
    "desc": "Clearance • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-527",
    "name": "Half-life (first order)",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "t_1/2 = 0.693/k",
    "display": "t_1/2 = 0.693/k",
    "desc": "Half-life (first order) • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-528",
    "name": "Drug infusion steady state",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "C_ss = Rate_in/CL",
    "display": "C_ss = Rate_in/CL",
    "desc": "Drug infusion steady state • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-529",
    "name": "Exponential elimination",
    "category": "biology",
    "chapter": "Health Sciences",
    "section": "10.1 Core Quantitative & Physiological Relations (University)",
    "latex": "C(t)=C₀e^(−kt)",
    "display": "C(t)=C₀e^(−kt)",
    "desc": "Exponential elimination • 10.1 Core Quantitative & Physiological Relations (University)"
  },
  {
    "id": "hb-530",
    "name": "Standard score",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "z=(x−\\mu )/\\sigma ",
    "display": "z=(x−\\mu )/\\sigma ",
    "desc": "Standard score • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-531",
    "name": "Correlation",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "r = Cov(X,Y)/(\\sigma _X\\sigma _Y)",
    "display": "r = Cov(X,Y)/(\\sigma _X\\sigma _Y)",
    "desc": "Correlation • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-532",
    "name": "Linear model",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "Y = \\beta ₀ + \\beta ₁X + \\varepsilon ",
    "display": "Y = \\beta ₀ + \\beta ₁X + \\varepsilon ",
    "desc": "Linear model • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-533",
    "name": "Multiple regression",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "y = X\\beta  + \\varepsilon ",
    "display": "y = X\\beta  + \\varepsilon ",
    "desc": "Multiple regression • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-534",
    "name": "Coefficient of determination",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "R^2 = 1−SSE/SST",
    "display": "R^2 = 1−SSE/SST",
    "desc": "Coefficient of determination • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-535",
    "name": "Odds ratio",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "OR = odds_exposed/odds_unexposed",
    "display": "OR = odds_exposed/odds_unexposed",
    "desc": "Odds ratio • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-536",
    "name": "Cronbach's alpha",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "\\alpha  = k/(k−1)[1−\\sum \\sigma _i^2/\\sigma _total^2]",
    "display": "\\alpha  = k/(k−1)[1−\\sum \\sigma _i^2/\\sigma _total^2]",
    "desc": "Cronbach's alpha • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-537",
    "name": "Cohen's d",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "d=(\\bar{x}₁−\\bar{x}₂)/s_pooled",
    "display": "d=(\\bar{x}₁−\\bar{x}₂)/s_pooled",
    "desc": "Cohen's d • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-538",
    "name": "Pooled SD",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "s_p = \\\\sqrt[((n₁−1)s₁^2+(n₂−1)s₂^2)/(n₁+n₂−2)]",
    "display": "s_p = \\\\sqrt[((n₁−1)s₁^2+(n₂−1)s₂^2)/(n₁+n₂−2)]",
    "desc": "Pooled SD • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-539",
    "name": "Standard error",
    "category": "stats",
    "chapter": "Psychology & Social Science",
    "section": "11.1 Quantitative Methods (University",
    "latex": "SE = SD/\\\\text{sqrtn}",
    "display": "SE = SD/\\\\text{sqrtn}",
    "desc": "Standard error • 11.1 Quantitative Methods (University"
  },
  {
    "id": "hb-540",
    "name": "Accounting equation",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "Assets = Liabilities + Equity",
    "display": "Assets = Liabilities + Equity",
    "desc": "Accounting equation • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-541",
    "name": "Gross profit",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "Gross profit = Revenue − Cost of goods sold",
    "display": "Gross profit = Revenue − Cost of goods sold",
    "desc": "Gross profit • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-542",
    "name": "Operating profit",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "EBIT = Revenue − Operating expenses",
    "display": "EBIT = Revenue − Operating expenses",
    "desc": "Operating profit • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-543",
    "name": "Net profit",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "Net profit = Revenue − Total expenses",
    "display": "Net profit = Revenue − Total expenses",
    "desc": "Net profit • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-544",
    "name": "Current ratio",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "Current ratio = Current assets/Current liabilities",
    "display": "Current ratio = Current assets/Current liabilities",
    "desc": "Current ratio • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-545",
    "name": "Quick ratio",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "Quick ratio = Quick assets/Current liabilities",
    "display": "Quick ratio = Quick assets/Current liabilities",
    "desc": "Quick ratio • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-546",
    "name": "Break-even units",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "BE units = Fixed costs/(Selling price−Variable cost per unit)",
    "display": "BE units = Fixed costs/(Selling price−Variable cost per unit)",
    "desc": "Break-even units • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-547",
    "name": "Contribution",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "Contribution = Sales − Variable costs",
    "display": "Contribution = Sales − Variable costs",
    "desc": "Contribution • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-548",
    "name": "Contribution margin ratio",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "CM ratio = Contribution/Sales",
    "display": "CM ratio = Contribution/Sales",
    "desc": "Contribution margin ratio • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-549",
    "name": "EOQ",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "EOQ = \\sqrt(2DS/H)",
    "display": "EOQ = \\sqrt(2DS/H)",
    "desc": "EOQ • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-550",
    "name": "Inventory turnover",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "Inventory turnover = COGS/Average inventory",
    "display": "Inventory turnover = COGS/Average inventory",
    "desc": "Inventory turnover • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-551",
    "name": "ROI",
    "category": "finance",
    "chapter": "Business, Accounting & Operations",
    "section": "12.1 Accounting & Operations (University)",
    "latex": "ROI = Gain/Investment \\times 100\\%",
    "display": "ROI = Gain/Investment \\times 100\\%",
    "desc": "ROI • 12.1 Accounting & Operations (University)"
  },
  {
    "id": "hb-552",
    "name": "Inverse square flux",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "F = L/(4\\pi r^2)",
    "display": "F = L/(4\\pi r^2)",
    "desc": "Inverse square flux • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-553",
    "name": "Luminosity",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "L = 4\\pi R^2\\sigma T_eff^4",
    "display": "L = 4\\pi R^2\\sigma T_eff^4",
    "desc": "Luminosity • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-554",
    "name": "Magnitude difference",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "m₁−m₂ = −2.5 log₁₀(F₁/F₂)",
    "display": "m₁−m₂ = −2.5 log₁₀(F₁/F₂)",
    "desc": "Magnitude difference • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-555",
    "name": "Distance modulus",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "m−M = 5log₁₀(d/10 pc)",
    "display": "m−M = 5log₁₀(d/10 pc)",
    "desc": "Distance modulus • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-556",
    "name": "Kepler third law",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "P^2 = 4\\pi ^2a^3/[G(M+m)]",
    "display": "P^2 = 4\\pi ^2a^3/[G(M+m)]",
    "desc": "Kepler third law • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-557",
    "name": "Schwarzschild radius",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "r_s = 2GM/c^2",
    "display": "r_s = 2GM/c^2",
    "desc": "Schwarzschild radius • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-558",
    "name": "Hubble law",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "v = H₀d",
    "display": "v = H₀d",
    "desc": "Hubble law • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-559",
    "name": "Critical density",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "\\rho _c = 3H^2/(8\\pi G)",
    "display": "\\rho _c = 3H^2/(8\\pi G)",
    "desc": "Critical density • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-560",
    "name": "Friedmann equation",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "H^2 = (8\\pi G/3)\\rho  − kc^2/a^2 + Λc^2/3",
    "display": "H^2 = (8\\pi G/3)\\rho  − kc^2/a^2 + Λc^2/3",
    "desc": "Friedmann equation • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-561",
    "name": "Redshift",
    "category": "physics",
    "chapter": "Astronomy & Astrophysics",
    "section": "13.1 Core Formulae (University",
    "latex": "1+z = \\lambda _obs/\\lambda _emit",
    "display": "1+z = \\lambda _obs/\\lambda _emit",
    "desc": "Redshift • 13.1 Core Formulae (University"
  },
  {
    "id": "hb-562",
    "name": "Gradient",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "\\nabla f = (f_x,f_y,f_z)",
    "display": "\\nabla f = (f_x,f_y,f_z)",
    "desc": "Gradient • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-563",
    "name": "Directional derivative",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "D_u f = \\nabla f·u, ||u||=1",
    "display": "D_u f = \\nabla f·u, ||u||=1",
    "desc": "Directional derivative • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-564",
    "name": "Divergence",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "\\nabla ·F = \\partial F_x/\\partial x + \\partial F_y/\\partial y + \\partial F_z/\\partial z",
    "display": "\\nabla ·F = \\partial F_x/\\partial x + \\partial F_y/\\partial y + \\partial F_z/\\partial z",
    "desc": "Divergence • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-566",
    "name": "Laplacian",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "\\nabla ^2f = f_xx+f_yy+f_zz",
    "display": "\\nabla ^2f = f_xx+f_yy+f_zz",
    "desc": "Laplacian • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-567",
    "name": "Green theorem",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "∮_C(Pdx+Qdy)=∬_D(Q_x−P_y)dA",
    "display": "∮_C(Pdx+Qdy)=∬_D(Q_x−P_y)dA",
    "desc": "Green theorem • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-568",
    "name": "Divergence theorem",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "∯_S F·n dS = ∭_V \\nabla ·F dV",
    "display": "∯_S F·n dS = ∭_V \\nabla ·F dV",
    "desc": "Divergence theorem • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-569",
    "name": "Stokes theorem",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "∮_C F·dr = ∬_S (\\nabla \\times F)·n dS",
    "display": "∮_C F·dr = ∬_S (\\nabla \\times F)·n dS",
    "desc": "Stokes theorem • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-570",
    "name": "Heat equation",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "u_t = \\alpha u_xx",
    "display": "u_t = \\alpha u_xx",
    "desc": "Heat equation • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-571",
    "name": "Wave equation",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "u_tt = c^2u_xx",
    "display": "u_tt = c^2u_xx",
    "desc": "Wave equation • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-572",
    "name": "Laplace equation",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "\\nabla ^2u = 0",
    "display": "\\nabla ^2u = 0",
    "desc": "Laplace equation • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-573",
    "name": "Poisson equation",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "\\nabla ^2u = f",
    "display": "\\nabla ^2u = f",
    "desc": "Poisson equation • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-574",
    "name": "Euler method",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "y_{n+1}=y_n+h f(x_n,y_n)",
    "display": "y_{n+1}=y_n+h f(x_n,y_n)",
    "desc": "Euler method • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-575",
    "name": "RK4",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "y_{n+1}=y_n+(h/6)(k₁+2k₂+2k₃+k₄)",
    "display": "y_{n+1}=y_n+(h/6)(k₁+2k₂+2k₃+k₄)",
    "desc": "RK4 • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-576",
    "name": "Newton iteration",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "x_{n+1}=x_n−f(x_n)/f'(x_n)",
    "display": "x_{n+1}=x_n−f(x_n)/f'(x_n)",
    "desc": "Newton iteration • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-577",
    "name": "Trapezoidal rule",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "\\int _a^b f dx \\approx  h[(f₀+f_n)/2+\\sum f_i]",
    "display": "\\int _a^b f dx \\approx  h[(f₀+f_n)/2+\\sum f_i]",
    "desc": "Trapezoidal rule • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-578",
    "name": "Simpson 1/3 rule",
    "category": "calculus",
    "chapter": "Mathematics",
    "section": "14.1 Vector Calculus, PDE & Numerical Methods (University",
    "latex": "\\int  \\approx  h/3[f₀+f_n+4\\sum f_odd+2\\sum f_even]",
    "display": "\\int  \\approx  h/3[f₀+f_n+4\\sum f_odd+2\\sum f_even]",
    "desc": "Simpson 1/3 rule • 14.1 Vector Calculus, PDE & Numerical Methods (University"
  },
  {
    "id": "hb-579",
    "name": "Pi",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "\\pi  \\approx  3.141592653589793",
    "display": "\\pi  \\approx  3.141592653589793",
    "desc": "Pi • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-580",
    "name": "Euler number",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "e \\approx  2.718281828459045",
    "display": "e \\approx  2.718281828459045",
    "desc": "Euler number • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-581",
    "name": "Speed of light",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "c = 299,792,458 m/s",
    "display": "c = 299,792,458 m/s",
    "desc": "Speed of light • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-582",
    "name": "Gravitational constant",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "G \\approx  6.67430\\times 10^−11 m^3 kg^−1 s^−2",
    "display": "G \\approx  6.67430\\times 10^−11 m^3 kg^−1 s^−2",
    "desc": "Gravitational constant • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-583",
    "name": "Planck constant",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "h \\approx  6.62607015\\times 10^−34 J·s",
    "display": "h \\approx  6.62607015\\times 10^−34 J·s",
    "desc": "Planck constant • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-584",
    "name": "Reduced Planck constant",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "\\hbar  = h/(2\\pi )",
    "display": "\\hbar  = h/(2\\pi )",
    "desc": "Reduced Planck constant • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-585",
    "name": "Elementary charge",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "e \\approx  1.602176634\\times 10^−19 C",
    "display": "e \\approx  1.602176634\\times 10^−19 C",
    "desc": "Elementary charge • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-586",
    "name": "Vacuum permittivity",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "\\varepsilon ₀ \\approx  8.8541878128\\times 10^−12 F/m",
    "display": "\\varepsilon ₀ \\approx  8.8541878128\\times 10^−12 F/m",
    "desc": "Vacuum permittivity • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-587",
    "name": "Vacuum permeability",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "\\mu ₀ \\approx  1.25663706212\\times 10^−6 H/m approximately",
    "display": "\\mu ₀ \\approx  1.25663706212\\times 10^−6 H/m approximately",
    "desc": "Vacuum permeability • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-588",
    "name": "Boltzmann constant",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "k_B \\approx  1.380649\\times 10^−23 J/K",
    "display": "k_B \\approx  1.380649\\times 10^−23 J/K",
    "desc": "Boltzmann constant • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-589",
    "name": "Avogadro constant",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "N_A = 6.02214076\\times 10^23 mol^−1",
    "display": "N_A = 6.02214076\\times 10^23 mol^−1",
    "desc": "Avogadro constant • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-590",
    "name": "Gas constant",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "R = 8.314462618 J mol^−1 K^−1",
    "display": "R = 8.314462618 J mol^−1 K^−1",
    "desc": "Gas constant • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-591",
    "name": "Faraday constant",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "F \\approx  96485.33212 C/mol",
    "display": "F \\approx  96485.33212 C/mol",
    "desc": "Faraday constant • 15.1 Common Mathematical & Physical Constants (All Levels)"
  },
  {
    "id": "hb-592",
    "name": "Standard gravity",
    "category": "algebra",
    "chapter": "Reference",
    "section": "15.1 Common Mathematical & Physical Constants (All Levels)",
    "latex": "g₀ = 9.80665 m/s^2",
    "display": "g₀ = 9.80665 m/s^2",
    "desc": "Standard gravity • 15.1 Common Mathematical & Physical Constants (All Levels)"
  }
];

export const SYMBOL_ITEMS = [
  {
    "label": "±",
    "latex": "\\pm ",
    "desc": "Plus-minus"
  },
  {
    "label": "∓",
    "latex": "\\mp ",
    "desc": "Minus-plus"
  },
  {
    "label": "×",
    "latex": "\\times ",
    "desc": "Multiplication cross"
  },
  {
    "label": "÷",
    "latex": "\\div ",
    "desc": "Division sign"
  },
  {
    "label": "·",
    "latex": "\\cdot ",
    "desc": "Center dot product"
  },
  {
    "label": "∘",
    "latex": "\\circ ",
    "desc": "Function composition"
  },
  {
    "label": "∗",
    "latex": "\\ast ",
    "desc": "Asterisk / convolution"
  },
  {
    "label": "⊕",
    "latex": "\\oplus ",
    "desc": "Direct sum"
  },
  {
    "label": "⊗",
    "latex": "\\otimes ",
    "desc": "Tensor product"
  },
  {
    "label": "⊙",
    "latex": "\\odot ",
    "desc": "Hadamard product"
  },
  {
    "label": "†",
    "latex": "\\dagger ",
    "desc": "Hermitian conjugate"
  },
  {
    "label": "=",
    "latex": "= ",
    "desc": "Equals"
  },
  {
    "label": "≠",
    "latex": "\\neq ",
    "desc": "Not equal"
  },
  {
    "label": "≈",
    "latex": "\\approx ",
    "desc": "Approximately equal"
  },
  {
    "label": "≡",
    "latex": "\\equiv ",
    "desc": "Identical / congruent"
  },
  {
    "label": "∼",
    "latex": "\\sim ",
    "desc": "Similar / distributed as"
  },
  {
    "label": "∝",
    "latex": "\\propto ",
    "desc": "Proportional to"
  },
  {
    "label": "<",
    "latex": "< ",
    "desc": "Less than"
  },
  {
    "label": ">",
    "latex": "> ",
    "desc": "Greater than"
  },
  {
    "label": "≤",
    "latex": "\\leq ",
    "desc": "Less than or equal"
  },
  {
    "label": "≥",
    "latex": "\\geq ",
    "desc": "Greater than or equal"
  },
  {
    "label": "≪",
    "latex": "\\ll ",
    "desc": "Much less than"
  },
  {
    "label": "≫",
    "latex": "\\gg ",
    "desc": "Much greater than"
  },
  {
    "label": "≅",
    "latex": "\\cong ",
    "desc": "Isomorphic / congruent"
  },
  {
    "label": "∈",
    "latex": "\\in ",
    "desc": "Element of"
  },
  {
    "label": "∉",
    "latex": "\\notin ",
    "desc": "Not element of"
  },
  {
    "label": "⊂",
    "latex": "\\subset ",
    "desc": "Proper subset"
  },
  {
    "label": "⊆",
    "latex": "\\subseteq ",
    "desc": "Subset or equal"
  },
  {
    "label": "⊄",
    "latex": "\\not\\subset ",
    "desc": "Not a subset"
  },
  {
    "label": "⊃",
    "latex": "\\supset ",
    "desc": "Superset"
  },
  {
    "label": "⊇",
    "latex": "\\supseteq ",
    "desc": "Superset or equal"
  },
  {
    "label": "∪",
    "latex": "\\cup ",
    "desc": "Set union"
  },
  {
    "label": "∩",
    "latex": "\\cap ",
    "desc": "Set intersection"
  },
  {
    "label": "∅",
    "latex": "\\emptyset ",
    "desc": "Empty set"
  },
  {
    "label": "∖",
    "latex": "\\setminus ",
    "desc": "Set difference"
  },
  {
    "label": "∀",
    "latex": "\\forall ",
    "desc": "For all"
  },
  {
    "label": "∃",
    "latex": "\\exists ",
    "desc": "There exists"
  },
  {
    "label": "∄",
    "latex": "\\nexists ",
    "desc": "There does not exist"
  },
  {
    "label": "¬",
    "latex": "\\neg ",
    "desc": "Logical NOT"
  },
  {
    "label": "∧",
    "latex": "\\land ",
    "desc": "Logical AND"
  },
  {
    "label": "∨",
    "latex": "\\lor ",
    "desc": "Logical OR"
  },
  {
    "label": "∴",
    "latex": "\\therefore ",
    "desc": "Therefore"
  },
  {
    "label": "∵",
    "latex": "\\because ",
    "desc": "Because / since"
  },
  {
    "label": "ℝ",
    "latex": "\\mathbb{R} ",
    "desc": "Real numbers"
  },
  {
    "label": "ℂ",
    "latex": "\\mathbb{C} ",
    "desc": "Complex numbers"
  },
  {
    "label": "ℕ",
    "latex": "\\mathbb{N} ",
    "desc": "Natural numbers"
  },
  {
    "label": "ℤ",
    "latex": "\\mathbb{Z} ",
    "desc": "Integers"
  },
  {
    "label": "ℚ",
    "latex": "\\mathbb{Q} ",
    "desc": "Rational numbers"
  },
  {
    "label": "→",
    "latex": "\\rightarrow ",
    "desc": "Right arrow"
  },
  {
    "label": "←",
    "latex": "\\leftarrow ",
    "desc": "Left arrow"
  },
  {
    "label": "↔",
    "latex": "\\leftrightarrow ",
    "desc": "Bidirectional arrow"
  },
  {
    "label": "⇒",
    "latex": "\\Rightarrow ",
    "desc": "Implies"
  },
  {
    "label": "⇐",
    "latex": "\\Leftarrow ",
    "desc": "Is implied by"
  },
  {
    "label": "⇔",
    "latex": "\\Leftrightarrow ",
    "desc": "If and only if (IFF)"
  },
  {
    "label": "↦",
    "latex": "\\mapsto ",
    "desc": "Maps to"
  },
  {
    "label": "↑",
    "latex": "\\uparrow ",
    "desc": "Up arrow"
  },
  {
    "label": "↓",
    "latex": "\\downarrow ",
    "desc": "Down arrow"
  },
  {
    "label": "∞",
    "latex": "\\infty ",
    "desc": "Infinity"
  },
  {
    "label": "∂",
    "latex": "\\partial ",
    "desc": "Partial differential"
  },
  {
    "label": "∇",
    "latex": "\\nabla ",
    "desc": "Nabla / Del gradient"
  },
  {
    "label": "ℏ",
    "latex": "\\hbar ",
    "desc": "Reduced Planck constant"
  },
  {
    "label": "ℓ",
    "latex": "\\ell ",
    "desc": "Script l"
  },
  {
    "label": "ℵ",
    "latex": "\\aleph ",
    "desc": "Aleph cardinal"
  },
  {
    "label": "∠",
    "latex": "\\angle ",
    "desc": "Angle"
  },
  {
    "label": "⊥",
    "latex": "\\perp ",
    "desc": "Perpendicular"
  },
  {
    "label": "∥",
    "latex": "\\parallel ",
    "desc": "Parallel"
  },
  {
    "label": "…",
    "latex": "\\dots ",
    "desc": "Horizontal ellipsis"
  },
  {
    "label": "⋮",
    "latex": "\\vdots ",
    "desc": "Vertical ellipsis"
  },
  {
    "label": "⋱",
    "latex": "\\ddots ",
    "desc": "Diagonal ellipsis"
  }
];

export const GREEK_ITEMS = [
  {
    "label": "α",
    "latex": "\\alpha ",
    "name": "alpha"
  },
  {
    "label": "β",
    "latex": "\\beta ",
    "name": "beta"
  },
  {
    "label": "γ",
    "latex": "\\gamma ",
    "name": "gamma"
  },
  {
    "label": "δ",
    "latex": "\\delta ",
    "name": "delta"
  },
  {
    "label": "ε",
    "latex": "\\epsilon ",
    "name": "epsilon"
  },
  {
    "label": "ɛ",
    "latex": "\\varepsilon ",
    "name": "varepsilon"
  },
  {
    "label": "ζ",
    "latex": "\\zeta ",
    "name": "zeta"
  },
  {
    "label": "η",
    "latex": "\\eta ",
    "name": "eta"
  },
  {
    "label": "θ",
    "latex": "\\theta ",
    "name": "theta"
  },
  {
    "label": "ϑ",
    "latex": "\\vartheta ",
    "name": "vartheta"
  },
  {
    "label": "ι",
    "latex": "\\iota ",
    "name": "iota"
  },
  {
    "label": "κ",
    "latex": "\\kappa ",
    "name": "kappa"
  },
  {
    "label": "λ",
    "latex": "\\lambda ",
    "name": "lambda"
  },
  {
    "label": "μ",
    "latex": "\\mu ",
    "name": "mu"
  },
  {
    "label": "ν",
    "latex": "\\nu ",
    "name": "nu"
  },
  {
    "label": "ξ",
    "latex": "\\xi ",
    "name": "xi"
  },
  {
    "label": "π",
    "latex": "\\pi ",
    "name": "pi"
  },
  {
    "label": "ϖ",
    "latex": "\\varpi ",
    "name": "varpi"
  },
  {
    "label": "ρ",
    "latex": "\\rho ",
    "name": "rho"
  },
  {
    "label": "ϱ",
    "latex": "\\varrho ",
    "name": "varrho"
  },
  {
    "label": "σ",
    "latex": "\\sigma ",
    "name": "sigma"
  },
  {
    "label": "ς",
    "latex": "\\varsigma ",
    "name": "varsigma"
  },
  {
    "label": "τ",
    "latex": "\\tau ",
    "name": "tau"
  },
  {
    "label": "υ",
    "latex": "\\upsilon ",
    "name": "upsilon"
  },
  {
    "label": "φ",
    "latex": "\\phi ",
    "name": "phi"
  },
  {
    "label": "ϕ",
    "latex": "\\varphi ",
    "name": "varphi"
  },
  {
    "label": "χ",
    "latex": "\\chi ",
    "name": "chi"
  },
  {
    "label": "ψ",
    "latex": "\\psi ",
    "name": "psi"
  },
  {
    "label": "ω",
    "latex": "\\omega ",
    "name": "omega"
  },
  {
    "label": "Γ",
    "latex": "\\Gamma ",
    "name": "Gamma",
    "isUpper": true
  },
  {
    "label": "Δ",
    "latex": "\\Delta ",
    "name": "Delta",
    "isUpper": true
  },
  {
    "label": "Θ",
    "latex": "\\Theta ",
    "name": "Theta",
    "isUpper": true
  },
  {
    "label": "Λ",
    "latex": "\\Lambda ",
    "name": "Lambda",
    "isUpper": true
  },
  {
    "label": "Ξ",
    "latex": "\\Xi ",
    "name": "Xi",
    "isUpper": true
  },
  {
    "label": "Π",
    "latex": "\\Pi ",
    "name": "Pi",
    "isUpper": true
  },
  {
    "label": "Σ",
    "latex": "\\Sigma ",
    "name": "Sigma",
    "isUpper": true
  },
  {
    "label": "Υ",
    "latex": "\\Upsilon ",
    "name": "Upsilon",
    "isUpper": true
  },
  {
    "label": "Φ",
    "latex": "\\Phi ",
    "name": "Phi",
    "isUpper": true
  },
  {
    "label": "Ψ",
    "latex": "\\Psi ",
    "name": "Psi",
    "isUpper": true
  },
  {
    "label": "Ω",
    "latex": "\\Omega ",
    "name": "Omega",
    "isUpper": true
  }
];
