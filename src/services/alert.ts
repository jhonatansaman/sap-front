import React from 'react';
import {toast} from 'react-toastify';

class Alert {
  success = (title: string): React.ReactText => {
    return toast.success(title, {
      hideProgressBar: true,
    });
  };

  error = (title: string): React.ReactText => {
    return toast.error(title, {
      hideProgressBar: true,
    });
  };
}

export const alertService = new Alert();
