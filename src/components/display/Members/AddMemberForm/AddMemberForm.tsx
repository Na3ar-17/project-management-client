import { NextPage } from 'next'
import styles from './AddMemberForm.module.scss'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import FullUserAvatar from '@/components/ui/avatar/FullUserAvatar/FullUserAvatar'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { useForm } from 'react-hook-form'
import { useSearchUsersDebounced } from '@/api/hooks/user/useSearchUsersDebounced'
interface IProps {}

const AddMemberForm: NextPage<IProps> = ({}) => {
  const { control, watch, register } = useForm<{ email: string }>({
    mode: 'onChange',
  })

  const { data, isPending } = useSearchUsersDebounced({ watch })

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search by email"
            autoComplete="off"
            {...register('email')}
          />
        </form>
        <div className={styles['users-list']}>
          <ScrollArea className="h-[200px]">
            {isPending && <div>Loading</div>}
            <div className={styles.wrapper}>
              {data ? (
                data.map((user, index) => (
                  <div className={styles.user} key={index}>
                    <FullUserAvatar
                      className="text-left"
                      avatarSize={40}
                      key={index}
                      data={{
                        fullName: user.fullName,
                        email: user.email,
                        id: user.id,
                        imgLink: user.imgLink,
                      }}
                    />
                    <div className={styles.actions}>
                      <Button
                        text="Invite"
                        type="button"
                        width={80}
                        height={22}
                      />
                    </div>
                  </div>
                ))
              ) : (
                <div>Type to search</div>
              )}

              {data && data?.length <= 0 && <div>Not found</div>}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default AddMemberForm
