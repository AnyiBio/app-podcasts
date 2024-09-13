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
export default function extractGuid(item: any): string {
  if (item.guid?.[0]?._) {
    return item.guid[0]._;
  }

  if (item.guid?.[0]) {
    const guidValue = item.guid[0];

    if (guidValue.includes('gid:')) {
      console.log('guidddd');
      return guidValue.split('/').pop();
    }

    return guidValue;
  }

  return 'N/A';
}
