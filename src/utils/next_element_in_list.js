const nextElementeInList = (list, value) => {
  let currentActionIndex = list.indexOf(value);
  let nextValueIndex = (currentActionIndex + 1) % list.length;
  const nextAction = list[nextValueIndex];
  return nextAction;
};

export default nextElementeInList;
