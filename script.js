// 눈송이 효과 시작 함수
function startSnow() {
    for (let i = 0; i < 15; i++) {
        createSnowflake();
    }
}

function createSnowflake() {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.textContent = '❄';

    snowflake.style.left = Math.random() * 100 + 'vw';
    snowflake.style.animationDuration = Math.random() * 5 + 5 + 's';
    snowflake.style.fontSize = Math.random() * 1.5 + 0.5 + 'rem';

    document.body.appendChild(snowflake);

    snowflake.addEventListener('animationend', () => snowflake.remove());
}

// 클릭 이벤트: .center-box 외부 클릭 시 눈송이 효과 시작
document.addEventListener('click', (event) => {
    const centerBox = document.querySelector('.center-box');

    // .center-box 내부 클릭 시 동작 방지
    if (!centerBox.contains(event.target)) {
        startSnow(); // .center-box 외부 클릭 시 눈송이 효과 실행
    }
});

// 타이핑 효과 관련 코드
document.addEventListener('DOMContentLoaded', () => {
    const boldTexts = document.querySelectorAll('.bold-text');

    boldTexts.forEach((boldText, index) => {
        boldText.style.display = index === 0 ? 'inline' : 'none';
        boldText.addEventListener('click', (event) => {
            event.stopPropagation(); // 이벤트 전파 중단
            startTyping(index); // 타이핑 효과 실행
        });
    });
});

let currentIndex = 0;

function startTyping(index) {
    const hiddenTexts = document.querySelectorAll('.hidden-text');
    const boldTexts = document.querySelectorAll('.bold-text');

    if (index >= hiddenTexts.length) return;

    const target = hiddenTexts[index];
    if (target.style.display === 'block') return;

    target.style.display = 'block';
    target.classList.add('typing-text');

    const text = target.textContent;
    const speed = target.getAttribute('data-speed');
    target.textContent = '';

    let i = 0;
    function type() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            if (index + 1 < boldTexts.length) {
                boldTexts[index + 1].style.display = 'inline';
            }
        }
    }
    type();
}
