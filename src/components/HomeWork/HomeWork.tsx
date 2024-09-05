import { Box } from "@mantine/core"
import { IconBriefcase2 } from "@tabler/icons-react"

import { CertificateCard } from "@src/components/CertificateCard/CertificateCard"
import { ProjectCard } from "@src/components/ProjectCard/ProjectCard"
import { SectionTitle } from "@src/components/SectionTitle/SectionTitle"
import { certificates, projects, techTalk } from "@src/lib/constants"

import styles from "./HomeWork.module.css"

export function HomeWork() {
  return (
    <section id='work'>
      <SectionTitle title='Work' icon={IconBriefcase2} />
      <Box>
        <div className={styles.sectionTitle}>
          <h2>PROJECTS</h2>
        </div>
        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </Box>
      <Box className={styles.sectionBox}>
        <div className={styles.sectionTitle}>
          <h2>TECH TALK</h2>
        </div>
        <div className={styles.techTalkContainer}>
          <div className={styles.techTalkInfo}>
            <h3>{techTalk.title}</h3>
            <p className={styles.techTalkDate}>{techTalk.date}</p>
          </div>
          <div className={styles.videoWrapper}>
            <iframe
              width='560'
              height='315'
              src={`https://www.youtube.com/embed/${techTalk.videoId}`}
              title={techTalk.title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              referrerPolicy='strict-origin-when-cross-origin'
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </Box>
      <Box className={styles.sectionBox}>
        <div className={styles.sectionTitle}>
          <h2>CERTIFICATES</h2>
        </div>
        <div className={styles.certificatesGrid}>
          {certificates.map((certificate, index) => (
            <CertificateCard key={index} {...certificate} />
          ))}
        </div>
      </Box>
    </section>
  )
}
