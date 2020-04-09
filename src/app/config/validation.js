export const validation = {
  email: {
    presence: {
      message: 'Please enter an email address',
    },
    format: {
      pattern: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      message: 'Please enter a valid email address',
    },
  },
  password: {
    presence: {
      message: 'Please enter a password',
    },
    format: {
      pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{7,})/,
      message: 'Use 8 or more characters with a mix of uppercase, lowercase, numbers & symbols',
    },
  },
  fName: {
    presence: {
      message: 'Please enter a FirstName',
    },
    length: {
      minimum: {
        value: 3,
        message: 'Your FirstName must be at least 3 characters',
      },
    },
  },
  lName: {
    presence: {
      message: 'Please enter a LastName',
    },
    length: {
      minimum: {
        value: 3,
        message: 'Your LastName must be at least 3 characters',
      },
    },
  },
  phone: {
    presence: {
      message: 'Please enter a phone number',
    },
    length: {
      maximum: {
        value: 8,
        message: 'phone number must be within 8 characters',
      },
    },
  },
};

export function validate (nameField, value) {
  console.log ('nameField', nameField);
  console.log ('value', value);
  let resp = [null, null];
  if (validation.hasOwnProperty (nameField)) {
    let v = validation[nameField];
    if (value == '' || value == null) {
      resp[0] = false;
      resp[1] = v['presence']['message'];
    } else if (
      v.hasOwnProperty ('format') &&
      !v['format']['pattern'].test (value)
    ) {
      resp[0] = false;
      resp[1] = v['format']['message'];
    } else if (v.hasOwnProperty ('length')) {
      let l = v['length'];
      if (
        l.hasOwnProperty ('minimum') &&
        value.length < l['minimum']['value']
      ) {
        resp[0] = false;
        resp[1] = l['minimum']['message'];
      } else if (
        l.hasOwnProperty ('maximum') &&
        value.length > l['maximum']['value']
      ) {
        resp[0] = false;
        resp[1] = l['maximum']['message'];
      } else {
        resp[0] = true;
      }
    } else {
      resp[0] = true;
    }
  } else {
    resp[0] = true;
  }
  return resp;
}
