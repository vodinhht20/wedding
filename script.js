
  // Lấy các phần tử từ DOM
  const daysElement = document.getElementById('days');
  const hoursElement = document.getElementById('hours');
  const minutesElement = document.getElementById('minutes');
  const secondsElement = document.getElementById('seconds');

  // Lấy ngày cần đếm ngược đến
  const countDownDate = new Date(document.getElementById('clock').getAttribute('data-date')).getTime();

  // Cập nhật thời gian mỗi giây
  const x = setInterval(function() {
    const now = new Date().getTime();
    const distance = countDownDate - now;

    // Tính toán các phần tử
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Cập nhật giao diện
    daysElement.querySelector('div').textContent = days;
    hoursElement.querySelector('div').textContent = hours;
    minutesElement.querySelector('div').textContent = minutes;
    secondsElement.querySelector('div').textContent = seconds;

    // Kết thúc nếu thời gian kết thúc
    if (distance < 0) {
      clearInterval(x);
      document.getElementById('clock').innerHTML = 'Đã qua thời gian đếm ngược!';
    }
  }, 1000);

