import Input from "../atoms/Input";
import Button from "../atoms/Button";

const SubscriptionForm = () => (
  <form className="flex w-full max-w-md">
    <Input
      placeholder="ایمیل خود را وارد کنید"
      className="rounded-r-full w-full  text-white"
      type="email"
    />
    <Button type="submit" className="rounded-l-full">
      عضویت
    </Button>
  </form>
);

export default SubscriptionForm;
