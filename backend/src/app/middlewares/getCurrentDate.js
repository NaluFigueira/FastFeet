export default async (req, res, next) => {
  const currentDate = new Date();

  currentDate.setTime(
    currentDate.getTime() - currentDate.getTimezoneOffset() * 60 * 1000
  );

  req.currentDate = currentDate;

  return next();
};
