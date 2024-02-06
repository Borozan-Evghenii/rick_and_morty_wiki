import { ImageGroup, LinkButton } from '@UI';
import type { EpisodeCardFragment } from '@gql';
import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface EpisodeCardProps {
  episodeData: EpisodeCardFragment;
  index: number;
}

export const EpisodeCard: React.FC<EpisodeCardProps> = ({ episodeData, index }) => (
  <motion.div
    className="flex flex-col justify-between gap-5 rounded-[20px] bg-light-thirty p-5 dark:bg-dark-thirty"
    initial={{ y: -20, opacity: 0 }}
    viewport={{ once: true }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      delay: (index / 2) * 0.1,
      duration: 0.2
    }}
  >
    <div className="flex flex-col">
      <div className="flex flex-wrap items-center justify-between ">
        <h3 className="title4-bold mr-5">{episodeData.name}</h3>
        <h3 className="title4">{episodeData.episode}</h3>
      </div>
      <p className="regular text-light-secondary dark:text-dark-secondary">
        {episodeData.air_date}
      </p>
    </div>
    <div className="flex flex-wrap items-center gap-5">
      <ImageGroup charactersData={episodeData.characters} />
      <LinkButton
        href={`/episode/${episodeData.id}`}
        icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
      >{`and ${episodeData.characters.length - 5} other characters`}</LinkButton>
    </div>
  </motion.div>
);
