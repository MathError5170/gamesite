// 设定正确答案
const correctAnswer = 5;

// 计时锁的变量
let lockUntil = null;

function guess(choice) {
  const messageElement = document.getElementById("message");
  const mainImage = document.getElementById("mainImage");

  // 如果有锁定状态，提示等待
  if (lockUntil && new Date() < lockUntil) {
    const remainingTime = Math.ceil((lockUntil - new Date()) / 1000);
    messageElement.textContent = `请稍等 ${remainingTime} 秒后再尝试！`;
    return;
  }

  // 判断选择是否正确
  if (choice === correctAnswer) {
    messageElement.textContent = "恭喜！答案正确！";
    messageElement.style.color = "green";
    mainImage.src = "image2.jpg"; // 显示奖励图片
  } else {
    messageElement.textContent = "答案错误，请稍后再试！";
    messageElement.style.color = "red";

    // 设置锁定时间为3分钟
    lockUntil = new Date(new Date().getTime() + 3 * 60 * 1000);
  }
}
