import React from "react"
import Link from "next/link"
import { IconExternalLink } from "@tabler/icons-react"

import styles from "./ProjectCard.module.css"

interface ProjectCardProps {
  title: string
  subtitle: string
  link: string
  tags: string[]
}

export function ProjectCard({ title, subtitle, link, tags }: ProjectCardProps) {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.subtitle}>{subtitle}</p>
      <div className={styles.tags}>
        {tags.map((tag, index) => (
          <span key={index} className={styles.tag}>
            {tag}
          </span>
        ))}
      </div>
      <Link href={link} className={styles.link} target='_blank' rel='noopener noreferrer'>
        View Project
        <IconExternalLink size={16} className={styles.externalIcon} />
      </Link>
    </div>
  )
}
