export default function convertArrayToObjectsForAttachments(array) {
  return array.map((item) => {
    const attachment_id = item.split("/")[0];
    return {
      attachment_id: attachment_id,
      attachment_path: item,
    };
  });
}
