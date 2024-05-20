import { NextPage } from 'next'
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from '../../shadcn/ui/input-otp'

interface IProps {
  onChange: (...event: any[]) => void
  value: string
}

const OTPField: NextPage<IProps> = ({ onChange, value }) => {
  return (
    <div>
      <InputOTP maxLength={6} value={value} onChange={onChange}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  )
}

export default OTPField
