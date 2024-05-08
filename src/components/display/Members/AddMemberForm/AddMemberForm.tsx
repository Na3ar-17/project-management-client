import { NextPage } from 'next'
import styles from './AddMemberForm.module.scss'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import FullUserAvatar from '@/components/ui/avatar/FullUserAvatar/FullUserAvatar'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
import Button from '@/components/ui/buttons/button-confirm/Button'
import { useForm } from 'react-hook-form'
import { useSearchUsersDebounced } from '@/api/hooks/user/useSearchUsersDebounced'
import { useCreateInvitation } from '@/api/hooks/notifications/useCreateInvitation'
import cn from 'clsx'
interface IProps {
  projectId: string
}

const AddMemberForm: NextPage<IProps> = ({ projectId }) => {
  const { watch, register } = useForm<{ email: string }>({
    mode: 'onChange',
  })

  const { data, isPending } = useSearchUsersDebounced({ watch })
  const { createInvitationMutation } = useCreateInvitation()

  const handleInvite = (recipientId: string) => {
    createInvitationMutation({
      content: 'Invitation to project',
      recipientId,
      projectId,
      hasSeen: false,
    })
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search by email to add new member"
            autoComplete="off"
            {...register('email')}
          />
        </form>
        <div
          className={cn(styles['users-list'], watch('email') && styles.visible)}
        >
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
                        className="text-center"
                        onClick={() => handleInvite(user.id)}
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
