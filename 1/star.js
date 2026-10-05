// This function returns a list of 2d points relative to 0,0 that form a star
function star(size, pointsPerSide, sides = 5, ratio = 0.382) {
  const points = [];
  const innerRadius = size * ratio;

  for (let side = 0; side < sides; side++) {
    const outerAngle = -Math.PI / 2 + side * (2 * Math.PI / sides);
    const innerAngle = outerAngle + Math.PI / sides;

    for (let i = 0; i < pointsPerSide; i++) {
      const t = i / pointsPerSide;
      const angle = outerAngle + (innerAngle - outerAngle) * t;
      const radius = size + (innerRadius - size) * t;

      points.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius
      ]);
    }

    for (let i = 0; i < pointsPerSide; i++) {
      const t = i / pointsPerSide;
      const angle = innerAngle + (2 * Math.PI / sides) * t;
      const radius = innerRadius + (size - innerRadius) * t;

      points.push([
        Math.cos(angle) * radius,
        Math.sin(angle) * radius
      ]);
    }
  }

  return points;
}