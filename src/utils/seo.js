/**
 * SEO utility helpers — inject / remove JSON-LD structured data scripts at runtime.
 * Used by Vue components in their mounted() / beforeUnmount() hooks so the
 * template compiler never encounters raw <script> tags.
 */

/**
 * Inject a JSON-LD <script> block into <head>.
 * Replaces any existing block with the same id.
 * @param {string} id  - Unique id for the script element
 * @param {object} data - Structured data object
 */
export function injectJsonLd(id, data) {
  removeJsonLd(id);
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.id = id;
  script.textContent = JSON.stringify(data, null, 2);
  document.head.appendChild(script);
}

/**
 * Remove a previously injected JSON-LD <script> block.
 * @param {string} id
 */
export function removeJsonLd(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

/**
 * Build a BreadcrumbList schema object.
 * @param {Array<{name: string, url: string}>} crumbs
 * @returns {object} Schema.org BreadcrumbList
 */
export function breadcrumbSchema(crumbs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url
    }))
  };
}

