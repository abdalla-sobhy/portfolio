export const Logo = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Option 1: Stylized "A" with geometric design */}
    <path 
      d="M20 5L30 25H25L20 15L15 25H10L20 5Z" 
      fill="currentColor" 
      className="text-gold"
    />
    <path 
      d="M15 25L20 35L25 25H15Z" 
      fill="currentColor" 
      className="text-white"
    />
    <circle 
      cx="20" 
      cy="20" 
      r="18" 
      stroke="currentColor" 
      strokeWidth="1.5" 
      fill="none" 
      className="text-gold opacity-50"
    />
  </svg>
)

// Alternative Option 2: Elegant monogram style
export const LogoMonogram = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="1" y="1" width="38" height="38" stroke="#d4af37" strokeWidth="2" fill="none" />
    <rect x="5" y="5" width="30" height="30" stroke="#d4af37" strokeWidth="1" fill="none" opacity="0.5" />
    <text 
      x="20" 
      y="26" 
      textAnchor="middle" 
      fontSize="20" 
      fontWeight="bold" 
      fill="#d4af37"
      fontFamily="serif"
    >
      A
    </text>
  </svg>
)

// Alternative Option 3: Modern abstract logo
export const LogoAbstract = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20 5 L35 20 L20 35 L5 20 Z" 
      stroke="#d4af37" 
      strokeWidth="2" 
      fill="none"
    />
    <path 
      d="M20 10 L30 20 L20 30 L10 20 Z" 
      fill="#d4af37" 
      opacity="0.2"
    />
    <circle cx="20" cy="20" r="5" fill="#d4af37" />
  </svg>
)

// Alternative Option 4: Hexagon with initial
export const LogoHexagon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path 
      d="M20 4 L32 11 L32 26 L20 33 L8 26 L8 11 Z" 
      stroke="#d4af37" 
      strokeWidth="2" 
      fill="#d4af37" 
      fillOpacity="0.1"
    />
    <text 
      x="20" 
      y="25" 
      textAnchor="middle" 
      fontSize="18" 
      fontWeight="300" 
      fill="#d4af37"
      fontFamily="Arial, sans-serif"
    >
      AB
    </text>
  </svg>
)