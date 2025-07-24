'use client'
import React, { useState } from 'react'
import { Form, FormControl, FormField, FormItem, FormMessage } from '../ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from '../ui/button'
import Spinner from '../Icons/Spinner'
import z from 'zod'

const ContactForm = () => {
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const contactFormSchema = z.object({
    name: z.string().min(2).max(50),
    company: z.string().min(2).max(50),
    phone: z.string().min(2).max(50),
    country: z.string().min(2).max(50),
    email: z.string().min(2).max(50),
    subject: z.string().min(2).max(50),
    message: z.string().min(2).max(50),
  });

  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const inputClassNames =
    "custom-blur-md w-full rounded-[20px] border border-[#CECACB] bg-white  py-[16px] text-center text-sm  text-white placeholder:text-[18px] placeholder:text-black focus:outline-1 focus:outline-white focus:placeholder:opacity-0";


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(()=>{})}
        className="grid mx-auto 2xl:max-w-[1400px] pb-[86px] max-w-[1200px] md:w-[694px] px-[48px] grid-cols-6 gap-x-[8px] gap-y-[14px] pt-[88px] w-full md:max-w-[694px]"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem className="col-span-6  md:col-span-3">
              <FormControl>
                <input
                  className={inputClassNames}
                  placeholder="First Name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-6  md:col-span-3">
              <FormControl>
                <input
                  className={inputClassNames}
                  placeholder="Last Name"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem className="col-span-6  md:col-span-3">
              <FormControl>
                <input
                  className={inputClassNames}
                  placeholder="Company Website"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="country"
          render={({ field }) => (
            <FormItem className="col-span-6  md:col-span-3">
              <FormControl>
                <input
                  className={inputClassNames}
                  placeholder="Country"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="col-span-6  md:col-span-3">
              <FormControl>
                <input
                  className={inputClassNames}
                  placeholder="Email"
                  {...field}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem className="col-span-6  md:col-span-3">
              <FormControl>
                <input
                  className={inputClassNames}
                  placeholder="Phone Number"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative col-span-6">
          <div className="relative flex h-[217px] items-center justify-center">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="size-full">
                  <FormControl>
                      <textarea
                        {...field}
                        onFocus={() => setIsTextAreaFocused(true)}
                        onBlur={() => setIsTextAreaFocused(false)}
                        className="custom-blur-md flex size-full border-[#CECACB] border resize-none items-center justify-center rounded-[20px] border   bg-white bg-opacity-5 p-3 text-start  text-sm text-white placeholder:absolute placeholder:top-1/2 placeholder:text-[18px] placeholder:text-white focus:outline-1 focus:outline-white"
                      />
                  </FormControl>
                  {!isTextAreaFocused &&
                    form.getValues("message").trim().length < 1 && (
                      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black">
                          Message
                        </span>
                    )}
                </FormItem>
              )}
            />
          </div>
        </div>

        <Button
          disabled={isSubmitting}
          type="submit"
          className="py-[16px col-span-6 mt-[13px] bg-black h-[53px] text-white w-full rounded-[20px] text-[18px] font-medium"
        >
          {isSubmitting ? <Spinner /> : "Send"}
        </Button>
      </form>
    </Form>
  )
}

export default ContactForm