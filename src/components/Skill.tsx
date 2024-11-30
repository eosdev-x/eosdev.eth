import { motion } from 'framer-motion';

interface SkillProps {
  name: string;
  level: number;
}

export default function Skill({ name, level }: SkillProps) {
  return (
    <div className="w-full">
      <div className="flex justify-between">
        <span className="text-sm text-gray-300">{name}</span>
        <span className="text-sm text-gray-400">{level}%</span>
      </div>
      <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-700">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full rounded-full bg-blue-500"
        />
      </div>
    </div>
  );
}