export function CalculateTime({ distance, minutes, seconds, milliseconds }) {
  let totalInSeconds =
    (minutes * 60 + seconds + milliseconds / 1000) * distance;

  let h = totalInSeconds / 3600;
  let m = (h - parseInt(h)) * 60;
  let s = (m - parseInt(m)) * 60;

  return {
    hours: parseInt(h),
    minutes: parseInt(m),
    seconds: parseInt(s.toFixed(2)),
  };
}

export function CalculatePace({ distance, hours, minutes, seconds }) {
  const time = hours * 60 + minutes + seconds / 60;
  let avgPaceInMinutes = time / distance;
  let m = parseInt(avgPaceInMinutes);
  let s = parseInt((avgPaceInMinutes - m) * 60);
  let ms = parseInt(((avgPaceInMinutes - m) * 60 - s) * 1000);
  return {
    minutes: m,
    seconds: s,
    milliseconds: ms,
  };
}

export function CalculateDistance({ pace, time }) {
  const timeInSeconds = time.hours * 3600 + time.minutes * 60 + time.seconds;
  const paceInSeconds =
    pace.minutes * 60 + pace.seconds + pace.milliseconds / 1000;
  let distance = (timeInSeconds / paceInSeconds).toFixed(3);
  return { distance: distance };
}
