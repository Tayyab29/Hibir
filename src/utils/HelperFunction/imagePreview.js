const arrayBufferToBase64 = (buffer) => {
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const length = bytes.byteLength;
  for (let i = 0; i < length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return window.btoa(binary);
};
export function renderImage(data, fileType) {
  const base64String = arrayBufferToBase64(data);

  return `data:${fileType};base64,${base64String}`;
}
