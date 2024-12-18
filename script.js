// เมื่อกดปุ่มให้แสดงเซอร์ไพรส์และเล่นเพลง
document.getElementById('revealButton').addEventListener('click', function () {
    const surprise = document.getElementById('surprise');
    const bgMusic = document.getElementById('bgMusic');
    
    if (surprise.classList.contains('hidden')) {
      surprise.classList.remove('hidden');
      bgMusic.play(); // เล่นเพลงเมื่อแสดงเซอร์ไพรส์
      generateHearts(); // เรียกฟังก์ชันสร้างหัวใจ
    }
  });
  
  // ฟังก์ชันสร้างหัวใจ
  function generateHearts() {
    const heartsContainer = document.querySelector('.hearts');
  
    // สร้างหัวใจหลายดวง
    for (let i = 0; i < 20; i++) {
      setTimeout(() => {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${3 + Math.random() * 2}s`;
        heart.style.opacity = `${0.5 + Math.random() * 0.5}`;
        heartsContainer.appendChild(heart);
  
        // ลบหัวใจเมื่ออนิเมชันจบ
        setTimeout(() => {
          heart.remove();
        }, 5000);
      }, i * 200); // หน่วงเวลาสร้างแต่ละหัวใจ
    }
  }
  