import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function Login() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="bg-primary text-white hover:bg-primary hover:text-white hover:opacity-80 text-base uppercase font-semibold !py-5 px-6"
        >
          Login
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-semibold text-primary ">
            Login
          </DialogTitle>
          <DialogDescription className="uppercase text-center">
            Welcome Back to Food zero ! 🍕
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4 items-center">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="name"
              className="text-right uppercase font-semibold"
            >
              Email
            </Label>
            <Input
              type="email"
              id="name"
              placeholder="Enter your email address"
              className="col-span-3 focus:border-none  focus:outline-none"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label
              htmlFor="username"
              className="text-right uppercase font-semibold"
            >
              Password
            </Label>
            <Input
              type="password"
              id="username"
              placeholder="Enter Your Password"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Continue</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
