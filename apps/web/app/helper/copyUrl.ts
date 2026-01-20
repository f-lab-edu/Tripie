export const isClipBoardTextCopied = async (url_text: string) => {
  const clipBoardText = await navigator?.clipboard
    ?.readText()
    ?.catch(res => res)
    .then(item => {
      return item === url_text;
    });
  return clipBoardText;
};

const copyTextUrl = async (url_text: string) => {
  const clipBoardText = await navigator.clipboard.readText();
  const completed = navigator.clipboard.writeText(url_text).then(() => {
    if (clipBoardText !== url_text) {
      return null;
    }
    return '완료';
  });

  return completed;
};

export default copyTextUrl;
