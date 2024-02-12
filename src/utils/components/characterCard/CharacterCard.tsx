import { LinkButton } from '@UI';
import type { CharacterCardFragmentFragment } from '@gql';
import { motion } from 'framer-motion';
import React from 'react';
import { FiArrowUpRight } from 'react-icons/fi';

interface CharacterCardProps {
  info: CharacterCardFragmentFragment;
  index?: number;
}

export const CharacterCard: React.FC<CharacterCardProps> = ({ info, index }) => (
  <motion.div
    className="flex flex-col gap-5 rounded-[10px] bg-light-thirty p-[12px] dark:bg-dark-thirty"
    initial={{ y: -20, opacity: 0 }}
    viewport={{ once: true }}
    whileInView={{ y: 0, opacity: 1 }}
    transition={{
      delay: (index! / 2) * 0.1,
      duration: 0.2
    }}
  >
    <div>
      <img alt={`${info?.name}`} className="w-full" src={`${info?.image}`} />
    </div>
    <div className="flex items-center justify-between gap-2">
      <div className="flex flex-col">
        <h2 className="title5 whitespace-normal">{info?.name}</h2>
        <div className="flex items-center gap-5">
          <p className="regular text-light-secondary dark:text-dark-secondary ">{info?.species}</p>
          <div className="bg-red block h-2 w-2 rounded-full" />
        </div>
      </div>
      <LinkButton
        href={`/character/${info?.id}`}
        icon={<FiArrowUpRight color="fill-light-secondary dark:fill-dark-secondary" />}
      />
    </div>
  </motion.div>
);
