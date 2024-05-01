import TransparentField from '@/components/ui/fields/transparent-field/TransparentField'
import { SheetHeader, SheetTitle } from '@/components/ui/shadcn/ui/sheet'
import { TypeUpdateTaskCard } from '@/types/tasks.types'
import { NextPage } from 'next'
import { Control, Controller } from 'react-hook-form'

interface IProps {
  control: Control<TypeUpdateTaskCard>
}

const Header: NextPage<IProps> = ({ control }) => {
  return (
    <SheetHeader>
      <SheetTitle className="text-2xl">
        <Controller
          control={control}
          name="title"
          render={({ field: { onChange, value } }) => (
            <TransparentField
              className="w-full"
              value={value}
              onInputChange={onChange}
            />
          )}
        />
      </SheetTitle>
    </SheetHeader>
  )
}

export default Header
