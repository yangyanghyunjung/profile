

document.addEventListener('DOMContentLoaded', () => {   // HTML이 완전히 로드되면 실행
  
  const hero_content = document.querySelectorAll('.hero-content'); // 모든 컨텐츠 블록을 선택
  const certificates_skills = document.querySelectorAll('.certificates-skills-container'); // 모든 컨텐츠 블록을 선택
  // IntersectionObserver를 생성: 화면에 얼마나 보이는지 관찰하는 브라우저 API
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {                 // entries: 관찰 중인 요소들의 정보 배열
      if(entry.isIntersecting){                // entry가 화면에 '보이면'
        entry.target.classList.add('visible'); // .visible 클래스 추가 → 애니메이션으로 나타남
      } else {
        entry.target.classList.remove('visible'); // 안 보이면 .visible 제거 → 사라짐 효과
      }
    });
  }, {
    threshold: 0.3 // 요소의 30% 이상이 화면에 보일 때만 작동(값은 조정 가능)
  });
  // 모든 context-block에 대해 관찰 시작
  hero_content.forEach(block => observer.observe(block));
  certificates_skills.forEach(block => observer.observe(block));
  typing();
  
});

function typing()  {
  const text = "안녕하세요. 백엔드 개발자 양현정 입니다.\n확실한 문제 해결과 견고한 서비스를 지향합니다.";
  const el = document.querySelector(".slogan");
  let i = 0;
  const speed = 150; // 속도 (ms)

  function type() {
    if (i < text.length) {
      let char = text.charAt(i);
      if (char === "\n") {
        el.innerHTML += "<br>";
      } else {
        el.innerHTML += char;
      }
      i++;
      setTimeout(type, speed);
    } else {
      // el.style.borderRight = "none";
    }
  }

  el.textContent = "";
  type();
};
