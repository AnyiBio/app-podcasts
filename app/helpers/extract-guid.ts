/**
 * Extracts the GUID from an `item` object, handling various possible formats.
 *
 * The function checks for three possible GUID structures:
 *
 * 1. If the `guid` has an internal property `_`, it returns that value.
 * 2. If the `guid` is a string without the `_` property, it checks if it contains
 *    "episode-locator". If so, it extracts the part after the last `/`.
 *    If not, it returns the value as-is.
 * 3. If no valid GUID is found in any of the above formats, it returns `undefined`.
 *
 * @param item - The object containing the GUID, which may have different formats.
 * @returns The extracted GUID as a string or 'N/A' if no valid GUID is found.
 */
interface GuidItem {
  guid?: { _?: string }[] | string[];
}

export function extractGuid(item: GuidItem): string {
  // Check if the GUID has an internal property `_`
  if (Array.isArray(item.guid) && typeof item.guid[0] === 'object' && item.guid[0]?._) {
    return item.guid[0]._ as string;
  }

  // Check if the GUID is a string and handle CDATA format
  const guidValue = Array.isArray(item.guid) ? item.guid[0] : item.guid;

  if (typeof guidValue === 'string') {
    // Handle CDATA by stripping <![CDATA[ and ]]> tags if present
    const cleanedGuidValue = guidValue.replace(/<!\[CDATA\[|\]\]>/g, '').trim();

    if (cleanedGuidValue.includes('gid:')) {
      // Extract the part after 'gid:' from the cleaned GUID string
      return cleanedGuidValue.split('/').pop() ?? '';
    }

    return cleanedGuidValue;
  }

  return 'N/A';
}

interface Item {
  [key: string]: any;
}

export default function extractField<T>(item: Item, field: string): T | 'N/A' {
  if (Array.isArray(item[field]) && item[field].length > 0) {
    return item[field][0];
  }

  return 'N/A';
}
