function startTyping(index) {
    const hiddenTexts = document.querySelectorAll('.hidden-text');
    const target = hiddenTexts[index];
    if (target.style.display === 'block') return; // 이미 열려 있다면 종료
    
    target.style.display = 'block'; // 보이도록 설정
    target.classList.add('typing-text'); // 타이핑 스타일 적용

    const text = target.textContent; // 전체 텍스트 가져오기
    const speed = target.getAttribute('data-speed'); // 속도 설정
    target.textContent = ''; // 초기화

    let i = 0;
    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i); // 한 글자씩 추가
            i++;
            setTimeout(type, speed); // 다음 글자를 일정 시간 후 출력
        }
    }
    type(); // 타이핑 시작
}

// 눈송이 효과 시작 함수
function startSnow() {
    for (let i = 0; i < 15; i++) { // 눈송이 15개 생성
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄'; // 눈송이 문자

    // 랜덤 위치 설정
    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's'; // 5~10초 사이
    snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'rem'; // 0.5~2rem 사이 크기

    document.body.appendChild(snowflake);

    // 애니메이션이 끝나면 눈송이 제거
    snowflake.addEventListener('animationend', () => {
        snowflake.remove();
    });
}
