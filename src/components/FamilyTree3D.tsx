import { motion } from "framer-motion";

const nodes = [
  { id: 1, x: 50, y: 15, size: 60, label: "Прабабушка", delay: 0 },
  { id: 2, x: 30, y: 35, size: 50, label: "Бабушка", delay: 0.3 },
  { id: 3, x: 70, y: 35, size: 50, label: "Дедушка", delay: 0.4 },
  { id: 4, x: 20, y: 55, size: 45, label: "Мама", delay: 0.6 },
  { id: 5, x: 50, y: 55, size: 45, label: "Папа", delay: 0.7 },
  { id: 6, x: 80, y: 55, size: 45, label: "Тётя", delay: 0.8 },
  { id: 7, x: 35, y: 75, size: 40, label: "Я", delay: 1 },
  { id: 8, x: 55, y: 75, size: 40, label: "Брат", delay: 1.1 },
  { id: 9, x: 75, y: 75, size: 40, label: "Сестра", delay: 1.2 },
];

const connections = [
  { from: 1, to: 2 },
  { from: 1, to: 3 },
  { from: 2, to: 4 },
  { from: 3, to: 5 },
  { from: 2, to: 6 },
  { from: 4, to: 7 },
  { from: 5, to: 7 },
  { from: 4, to: 8 },
  { from: 5, to: 8 },
  { from: 6, to: 9 },
];

const FamilyTree3D = () => {
  const getNode = (id: number) => nodes.find((n) => n.id === id)!;

  return (
    <div className="relative w-full h-full">
      {/* Glow background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[80%] h-[80%] rounded-full bg-gradient-radial from-primary/10 via-transparent to-transparent blur-2xl" />
      </div>

      {/* SVG for connections */}
      <svg className="absolute inset-0 w-full h-full" style={{ overflow: "visible" }}>
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(230 60% 50%)" stopOpacity="0.3" />
            <stop offset="100%" stopColor="hsl(340 70% 75%)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        {connections.map((conn, index) => {
          const from = getNode(conn.from);
          const to = getNode(conn.to);
          return (
            <motion.line
              key={index}
              x1={`${from.x}%`}
              y1={`${from.y}%`}
              x2={`${to.x}%`}
              y2={`${to.y}%`}
              stroke="url(#lineGradient)"
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 + index * 0.1 }}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute transform -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: node.delay,
          }}
          whileHover={{ scale: 1.15 }}
        >
          <motion.div
            className="relative group cursor-pointer"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: node.delay,
            }}
          >
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full bg-gradient-to-br from-pink/30 to-gold/30 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                width: node.size + 16,
                height: node.size + 16,
                marginLeft: -8,
                marginTop: -8,
              }}
            />
            
            {/* Node circle */}
            <div
              className="rounded-full bg-gradient-to-br from-card to-background border-2 border-border/50 flex items-center justify-center shadow-card group-hover:shadow-glow transition-all duration-300"
              style={{ width: node.size, height: node.size }}
            >
              <div className="w-[70%] h-[70%] rounded-full bg-gradient-to-br from-mint-soft via-pink-soft to-gold-soft opacity-80" />
            </div>

            {/* Label */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-xs font-medium text-foreground bg-card/90 backdrop-blur-sm px-2 py-1 rounded-md shadow-sm">
                {node.label}
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}

      {/* Floating particles */}
      {[...Array(8)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 rounded-full"
          style={{
            left: `${20 + Math.random() * 60}%`,
            top: `${20 + Math.random() * 60}%`,
            background: i % 2 === 0 ? "hsl(var(--pink))" : "hsl(var(--gold))",
            opacity: 0.3,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 10 - 5, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default FamilyTree3D;