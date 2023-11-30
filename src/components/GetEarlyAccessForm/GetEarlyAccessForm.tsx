import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ProgressButton } from 'app/components/ProgressButton/ProgressButton';
import { ClassName } from 'app/types/common';
import atIcon from 'app/icons/svg-at-icon.svg';
import attentionIcon from 'app/icons/svg-attention.svg';
import { SIZE } from 'app/constants/common';
import classNames from 'classnames';
import { BUTTON_TYPE } from 'app/components/Button/Button';
import { toast } from 'react-toastify';

export const GetEarlyAccessForm = ({ className }: ClassName) => {
  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      EMAIL: '',
      b_e62a3ae690fea56e6647741ea_e5e78f281d: '',
    },
    validationSchema: Yup.object({
      EMAIL: Yup.string().email('Please enter valid email').required('Required'),
    }),
    onSubmit: (values) => {
      setLoading(true);
      const formData = new FormData();
      formData.append('EMAIL', values.EMAIL);
      formData.append('b_e62a3ae690fea56e6647741ea_e5e78f281d', values.b_e62a3ae690fea56e6647741ea_e5e78f281d);

      fetch(
        'https://gmail.us21.list-manage.com/subscribe/post?u=e62a3ae690fea56e6647741ea&id=e5e78f281d&f_id=003fcae1f0',
        {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/json',
          },
          body: formData,
        },
      )
        .then(() => {
          toast('Subscription Confirmed! Thank you!', { type: 'success' });
          formik.resetForm();
        })
        .catch(() => toast('Something when wrong!', { type: 'error' }))
        .finally(() => setLoading(false));
    },
  });

  return (
    <form
      id="get-early-access-form"
      className={classNames('relative w-full overflow-hidden lg:w-[785px]', className)}
      onSubmit={formik.handleSubmit}
      // action="https://gmail.us21.list-manage.com/subscribe/post?u=e62a3ae690fea56e6647741ea&amp;id=e5e78f281d&amp;f_id=003fcae1f0"
      // method="post"
      // target="_blank"
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="relative flex flex-1 items-center justify-between rounded-full border-0 bg-white py-[22px] px-8 text-left md:rounded-lg lg:w-[647px]">
          <img className="mr-2.5" src={atIcon} alt="" />
          <input
            className="w-full placeholder-black-900 focus-visible:outline-0"
            type="text"
            name="EMAIL"
            required
            placeholder="Enter email address"
            value={formik.values.EMAIL}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div className="absolute top-[-5000px]" aria-hidden="true">
            <input
              tabIndex={-1}
              type="text"
              name="b_e62a3ae690fea56e6647741ea_e5e78f281d"
              value={formik.values.b_e62a3ae690fea56e6647741ea_e5e78f281d}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
        </div>
        <ProgressButton
          className="ml-0 mt-4 justify-center rounded-full md:mt-0 md:ml-[-64px] md:rounded-lg lg:ml-[-182px]"
          size={SIZE.L}
          disabled={Boolean(formik.errors.EMAIL && formik.touched.EMAIL)}
          type={BUTTON_TYPE.SUBMIT}
          loading={loading}
        >
          Try it out
        </ProgressButton>
      </div>
      {formik.errors.EMAIL && formik.touched.EMAIL && (
        <p className="flex pl-8 pt-4 text-md text-red-900">
          <img className="mr-2.5" src={attentionIcon} alt="" />
          {formik.errors.EMAIL}
        </p>
      )}
      <p className="mt-4 text-center text-blue-500">Launching in Spring, 2024</p>
    </form>
  );
};
