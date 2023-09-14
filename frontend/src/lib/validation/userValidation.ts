export const validUsername = (val: string) => {
  const regx = new RegExp('^[a-zA-Z0-9_]+$');
  if (regx.test(val)) return true;
  else return false;
};

export const validPasswordSteps = (val: string) => {
  var count = 0;
  const regx1 = new RegExp('(?=.{5,})');
  const regx = new RegExp(
    '^(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{6,20}$',
  );
  if (val && val !== "") {
    count = 1;
  }
  if (regx1.test(val)) {
    count = 2;
  }
  if (regx.test(val)) {
    count = 3;
  }
  return count;
}

export const validPassword = (val: string) => {
  const regx = new RegExp(
    '^(?=.*[0-9])(?=.*[!@#$%^&*.])[a-zA-Z0-9!@#$%^&*.]{6,20}$',
  );
  if (regx.test(val)) return true;
  else return false;
};

export const validEmail = (val: string) => {
  const regx =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

  if (regx.test(val)) return true;
  else return false;
};
