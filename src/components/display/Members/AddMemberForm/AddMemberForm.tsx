import { NextPage } from 'next'
import styles from './AddMemberForm.module.scss'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import FullUserAvatar from '@/components/ui/avatar/FullUserAvatar/FullUserAvatar'
import { ScrollArea } from '@/components/ui/shadcn/ui/scroll-area'
import Button from '@/components/ui/buttons/button-confirm/Button'
interface IProps {}

const AddMemberForm: NextPage<IProps> = ({}) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <form className={styles.form}>
          <input
            type="text"
            className={styles.input}
            placeholder="Search by email"
          />
        </form>
        <div className={styles['users-list']}>
          <ScrollArea className="h-[400px]">
            <div className={styles.wrapper}>
              {Array.from({ length: 20 }).map((_, index) => (
                <div className={styles.user}>
                  <FullUserAvatar
                    className="text-left"
                    avatarSize={40}
                    key={index}
                    data={{
                      fullName: 'Nazar Gavrylyk',
                      email: 'gavruluknazar0210@gmail.com',
                      id: '1',
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
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </div>
  )
}

export default AddMemberForm
