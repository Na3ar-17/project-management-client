import { NextPage } from 'next'
import styles from './Chat.module.scss'
import { Boxes } from 'lucide-react'
import { ChatField } from '@/components/ui/fields/chat-field/ChatField'
import AvatarComponent from '@/components/ui/avatar/AvatarComponent'
import Image from 'next/image'
import { membersData } from '@/data/members.data'
import { EnumMemberStatus } from '@/types/members.type'
import { ScrollArea } from '../../ui/shadcn/ui/scroll-area'

const Chat: NextPage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.chat}>
        <nav className={styles.header}>
          <Boxes className={styles['chat-icon']} />
          <p className={styles['chat-name']}>Socila Media Chat</p>
        </nav>
        <div className={styles.body}>
          <div className={styles['message']}>
            <AvatarComponent
              imgLink="https://i.pinimg.com/564x/6b/8d/79/6b8d79bd28abeb90ce2e1166372b9eb0.jpg"
              size={35}
            />
            <span className={styles.content}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium aut excepturi vel labore iure sint suscipit nostrum
              voluptatum laborum nesciunt, ea maxime officiis magni qui. Saepe
              perferendis iste nemo ut id autem voluptate accusamus qui
              explicabo, atque unde quam inventore quia animi consequatur. Sed
              <p className={styles['created-at']}>20:10</p>
            </span>
          </div>
          <div className={styles['my-message']}>
            <span className={styles.content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nam ut, quam omnis quae reiciendis eos ipsum veniam
              <p className={styles['created-at']}>20:10</p>
            </span>
          </div>
          <div className={styles['my-message']}>
            <span className={styles.content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nam ut, quam omnis quae reiciendis eos ipsum veniam
              <p className={styles['created-at']}>20:10</p>
            </span>
          </div>
          <div className={styles['my-message']}>
            <span className={styles.content}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              dolor nam ut, quam omnis quae reiciendis eos ipsum veniam
              <p className={styles['created-at']}>20:10</p>
            </span>
          </div>
        </div>
        <div className={styles.footer}>
          <ChatField placeholder="Your Message" userAvatar={{ size: 30 }} />
        </div>
      </div>
      <div className={styles['chat-details']}>
        <p className={styles.title}>Chat Details</p>
        <div className={styles['members-block']}>
          <p className={styles['members-count']}>
            Members <span>5</span>
          </p>
          <div className={styles.members}>
            {membersData.map((member, index) => (
              <div key={index} className={styles.member}>
                <div className={styles['avatar']}>
                  <AvatarComponent imgLink={member.imgLink} size={35} />
                  {member.status === EnumMemberStatus.Active && (
                    <span className={styles.online}></span>
                  )}
                </div>
                <p className={styles.fullname}>{member.fullName}</p>
              </div>
            ))}
          </div>
        </div>
        <div className={styles['media-list']}>
          <p className={styles['media-title']}>
            Media <span>32</span>
          </p>

          <div className={styles.media}>
            <div className={styles.item}>
              <Image
                className={styles.img}
                src={
                  'https://i.pinimg.com/736x/27/2c/16/272c16cee4ae4d153f6109f0d105004c.jpg'
                }
                width={50}
                height={50}
                alt="item"
              />
            </div>
            <div className={styles.item}>
              <Image
                className={styles.img}
                src={
                  'https://i.pinimg.com/736x/dc/1c/b8/dc1cb8ee13ba6d8ae1a8ea4e6aad2ad1.jpg'
                }
                width={50}
                height={50}
                alt="item"
              />
            </div>
            <div className={styles.item}>
              <Image
                className={styles.img}
                src={
                  'https://i.pinimg.com/564x/58/3a/35/583a35781d7128eac011f6b1897b623e.jpg'
                }
                width={50}
                height={50}
                alt="item"
              />
            </div>
            <div className={styles.rest}>
              <p className={styles['rest-items-count']}>
                +<span>30</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Chat
