'use client';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Password } from '@/components/ui/password';
import { Text } from '@/components/ui/text';
import { routes } from '@/config/routes';
import { useFormik } from 'formik';
import { signIn } from 'next-auth/react';
import Link from 'next/link';
import { PiArrowRightBold } from 'react-icons/pi';

export default function SignInForm() {
  const validation = useFormik({
    enableReinitialize: false,
    initialValues: {
      email: 'jpcchaves@outlook.com',
      password: '123456',
      remember: false,
    },
    onSubmit: async (values) => {
      signIn('credentials', values);
    },
  });

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          validation.handleSubmit(e);
          return false;
          ``;
        }}
      >
        <div className="space-y-5">
          <Input
            type="email"
            size="lg"
            label="Email"
            placeholder="Enter your email"
            color="info"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
            name="email"
            value={validation.values.email}
            onChange={validation.handleChange}
          />
          <Password
            label="Password"
            placeholder="Enter your password"
            size="lg"
            className="[&>label>span]:font-medium"
            inputClassName="text-sm"
            color="info"
            name="password"
            value={validation.values.password}
            onChange={validation.handleChange}
          />
          <div className="flex items-center justify-between pb-2">
            <Checkbox
              label="Remember Me"
              color="info"
              variant="flat"
              className="[&>label>span]:font-medium"
              name="remember"
              onChange={validation.handleChange}
              checked={validation.values.remember}
            />
            <Link
              href={routes.auth.forgotPassword1}
              className="h-auto p-0 text-sm font-semibold text-blue underline transition-colors hover:text-gray-900 hover:no-underline"
            >
              Forget Password?
            </Link>
          </div>
          <Button className="w-full" type="submit" size="lg" color="info">
            <span>Sign in</span>{' '}
            <PiArrowRightBold className="ms-2 mt-0.5 h-5 w-5" />
          </Button>
        </div>
      </form>
      <Text className="mt-6 text-center leading-loose text-gray-500 lg:mt-8 lg:text-start">
        Don’t have an account?{' '}
        <Link
          href={routes.auth.signUp1}
          className="font-semibold text-gray-700 transition-colors hover:text-blue"
        >
          Sign Up
        </Link>
      </Text>
    </>
  );
}
