import { Button, Section } from "components";
import { FormControl, Input } from "features/Form";
import { useFormik } from "formik";
import { useTranslation } from "next-i18next";
import React from "react";
import * as Yup from "yup";

const feedbackFormSchema = Yup.object().shape({
  fullname: Yup.string(),
  email: Yup.string().email().required(),
  message: Yup.string().min(5).required(),
});

export interface FeedbackFormValues {
  fullname?: string;
  email: string;
  message: string;
}

const feedbackFormInitialValues = {
  fullname: "",
  email: "",
  message: "",
};

export const FeedbackForm: React.FC = () => {
  const { t } = useTranslation();

  const onFeedbackSubmit = (values: FeedbackFormValues) => {
    console.log(values);
  };

  const form = useFormik({
    initialValues: feedbackFormInitialValues,
    validationSchema: feedbackFormSchema,
    onSubmit: onFeedbackSubmit,
  });

  return (
    <Section>
      <Section.Header title="Напишите нам" subtitle="Возникли вопросы?" align="center" />
      <div className="feedback-from">
        <form
          onSubmit={form.handleSubmit}
          className="mx-auto flex max-w-4xl flex-col items-center justify-center"
        >
          <div className="mb-6 flex w-full flex-col items-start justify-between sm:flex-row">
            <FormControl
              name="fullname"
              error={form.errors.fullname}
              className="mb-6 w-full sm:mb-0 sm:mr-10"
            >
              <Input
                placeholder={t("fullname")}
                value={form.values.fullname}
                onChange={form.handleChange}
              />
            </FormControl>
            <FormControl name="email" error={form.errors.email} className="w-full sm:ml-10">
              <Input
                placeholder={t("email")}
                value={form.values.email}
                onChange={form.handleChange}
              />
            </FormControl>
          </div>
          <FormControl name="message" error={form.errors.message} className="w-full">
            <Input
              placeholder={t("message")}
              value={form.values.message}
              onChange={form.handleChange}
            />
          </FormControl>
          <Button htmlType="submit" type="rounded" className="mt-3 sm:mt-6">
            Отправить
          </Button>
        </form>
      </div>
    </Section>
  );
};
