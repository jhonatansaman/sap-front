import React from 'react';
import {toast} from 'react-toastify';

class Alert {
  error = (title: string): React.ReactText => {
    return toast.error(title, {
      hideProgressBar: true,
    });
  };
}

export const alertService = new Alert();
