/**
 * Security utilities for input validation and sanitization
 */

/**
 * Escapes HTML special characters to prevent XSS attacks
 * @param text - Text to escape
 * @returns Escaped text safe for HTML
 */
export function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
    '/': '&#x2F;',
  };
  return text.replace(/[&<>"'\/]/g, (char) => map[char]);
}

/**
 * Validates email format
 * @param email - Email address to validate
 * @returns True if email is valid
 */
export function validateEmail(email: string): boolean {
  if (!email || email.length > 254) return false;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validates phone number format
 * @param phone - Phone number to validate
 * @returns True if phone is valid
 */
export function validatePhone(phone: string): boolean {
  if (!phone) return true; // Optional field
  if (phone.length < 10 || phone.length > 20) return false;
  const phoneRegex = /^[\d\s\-\+\(\)]{10,20}$/;
  return phoneRegex.test(phone);
}

/**
 * Validates string length
 * @param text - Text to validate
 * @param maxLength - Maximum allowed length
 * @returns True if text length is within limits
 */
export function validateLength(text: string, maxLength: number): boolean {
  return Boolean(text && text.length > 0 && text.length <= maxLength);
}

/**
 * Sanitizes filename to prevent path traversal attacks
 * @param filename - Original filename
 * @returns Sanitized filename
 */
export function sanitizeFilename(filename: string): string {
  // Remove path separators and null bytes
  return filename
    .replace(/[\/\\]/g, '_')
    .replace(/\0/g, '')
    .replace(/\.\./g, '_')
    .substring(0, 255); // Limit length
}

/**
 * Validates PDF file by checking magic bytes
 * @param buffer - File buffer
 * @returns True if file is a valid PDF
 */
export function isPDF(buffer: ArrayBuffer): boolean {
  const arr = new Uint8Array(buffer).subarray(0, 5);
  // PDF files start with %PDF-
  const header = String.fromCharCode(...Array.from(arr));
  return header === '%PDF-';
}
