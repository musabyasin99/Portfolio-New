const fs = require('fs');
const path = require('path');

// Try to extract text from PDF using a simple approach
const pdfPath = 'C:\\Users\\Musab.Yasin\\Downloads\\Musab_Yasin_Modern_CV.pdf';

if (fs.existsSync(pdfPath)) {
  // Read PDF as buffer
  const fileBuffer = fs.readFileSync(pdfPath);
  
  // Convert to string and extract text
  let text = fileBuffer.toString('binary');
  
  // Extract text between BT and ET markers (PDF text operators)
  const matches = text.match(/BT([\s\S]*?)ET/g) || [];
  
  // Also try to extract readable ASCII
  let readable = '';
  for (let i = 0; i < text.length; i++) {
    const code = text.charCodeAt(i);
    if ((code >= 32 && code <= 126) || code === 10 || code === 13) {
      readable += text[i];
    } else if (code > 127) {
      readable += ' ';
    }
  }
  
  // Filter and clean up
  const lines = readable.split(/[\n\r]+/).filter(line => line.trim().length > 0);
  const cleanedLines = lines.filter(line => {
    const trimmed = line.trim();
    return trimmed.length > 2 && !trimmed.startsWith('/') && !trimmed.startsWith('<<');
  });
  
  console.log('=== EXTRACTED CV CONTENT ===\n');
  cleanedLines.forEach(line => {
    const cleaned = line.replace(/\s+/g, ' ').trim();
    if (cleaned.length > 0 && !cleaned.match(/^[\d\s]+$/)) {
      console.log(cleaned);
    }
  });
  
} else {
  console.log('PDF not found at:', pdfPath);
}
