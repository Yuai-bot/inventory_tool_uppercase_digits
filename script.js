/*
 * script.js
 *
 * 生成隨機 8 位英數貨品編號的腳本。
 * 按下按鈕會產生代碼並顯示，點擊代碼可複製到剪貼簿。
 */

// 允許的字元集合：英文字母大寫與數字（不包含小寫字母）
const CHAR_SET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

/**
 * 生成一組指定長度的隨機字串。
 * @param {number} length 要生成字串的長度。
 * @returns {string} 生成的隨機字串。
 */
function generateRandomCode(length) {
  let result = '';
  const setLength = CHAR_SET.length;
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * setLength);
    result += CHAR_SET.charAt(randomIndex);
  }
  return result;
}

/**
 * 將表單中的值讀取出來，生成貨品編號，然後加入表格。
 * @param {Event} event 表單提交事件。
 */
/**
 * 點擊生成按鈕時產生代碼並顯示在畫面。
 */
function handleGenerateClick() {
  const code = generateRandomCode(8);
  const codeDisplay = document.getElementById('code-display');
  const copyMsg = document.getElementById('copy-msg');
  codeDisplay.textContent = code;
  // 清空複製提示
  copyMsg.textContent = '';
}

/**
 * 點擊代碼時複製到剪貼簿並顯示提示訊息。
 */
async function handleCodeClick() {
  const codeDisplay = document.getElementById('code-display');
  const code = codeDisplay.textContent.trim();
  if (!code) return;
  try {
    await navigator.clipboard.writeText(code);
    const copyMsg = document.getElementById('copy-msg');
    copyMsg.textContent = '已複製到剪貼簿！';
  } catch (err) {
    console.error('複製失敗：', err);
  }
}

// 註冊事件監聽
document.addEventListener('DOMContentLoaded', function () {
  const generateBtn = document.getElementById('generate-btn');
  const codeDisplay = document.getElementById('code-display');
  generateBtn.addEventListener('click', handleGenerateClick);
  codeDisplay.addEventListener('click', handleCodeClick);
});