import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TreeDeciduous, Calendar, Camera, Sparkles, Users, Shield } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background" />
      
      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/50 text-secondary-foreground text-sm font-medium mb-4">
            Ключевые возможности
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Всё для вашей <span className="gradient-text-accent">семейной истории</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Три мощных инструмента, которые помогут сохранить и приумножить память о вашей семье
          </p>
        </motion.div>

        {/* Feature 1: Living Tree */}
        <FeatureBlock
          align="left"
          badge="Интерактивное древо"
          badgeColor="mint"
          title="Живое генеалогическое древо"
          description="Создавайте и сохраняйте историю своей семьи в красивом интерактивном формате. Добавляйте фотографии, истории и важные события для каждого члена семьи."
          features={[
            { icon: TreeDeciduous, text: "Бесконечные поколения" },
            { icon: Users, text: "Совместное редактирование" },
            { icon: Shield, text: "Приватность и защита" },
          ]}
        >
          <TreeVisualization />
        </FeatureBlock>

        {/* Feature 2: Smart Reminders */}
        <FeatureBlock
          align="right"
          badge="Умный календарь"
          badgeColor="pink"
          title="Напоминания о важных датах"
          description="Никогда не забудешь дни рождения, годовщины и памятные даты. Система сама напомнит и предложит персонализированные поздравления."
          features={[
            { icon: Calendar, text: "Автоматические напоминания" },
            { icon: Sparkles, text: "ИИ-генерация поздравлений" },
            { icon: Users, text: "Групповые чаты семьи" },
          ]}
        >
          <CalendarVisualization />
        </FeatureBlock>

        {/* Feature 3: Family Photographer */}
        <FeatureBlock
          align="left"
          badge="Магия ИИ"
          badgeColor="gold"
          title="Семейный фотограф"
          description="Невероятные возможности с фото — улучшение, восстановление и оживление старых снимков с помощью ИИ."
          features={[
            { icon: Camera, text: "Улучшение качества фото" },
            { icon: Sparkles, text: "Восстановление старых снимков" },
            { icon: Shield, text: "Полная конфиденциальность" },
          ]}
        >
          <AISearchVisualization />
        </FeatureBlock>
      </div>
    </section>
  );
};

interface FeatureBlockProps {
  align: "left" | "right";
  badge: string;
  badgeColor: "mint" | "pink" | "gold";
  title: string;
  description: string;
  features: { icon: React.ElementType; text: string }[];
  children: React.ReactNode;
}

const FeatureBlock = ({ align, badge, badgeColor, title, description, features, children }: FeatureBlockProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const badgeColors = {
    mint: "bg-mint/20 text-accent-foreground",
    pink: "bg-pink-soft text-secondary-foreground",
    gold: "bg-gold-soft text-foreground",
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="mb-24 lg:mb-40 last:mb-0"
    >
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-center ${align === "right" ? "lg:flex-row-reverse" : ""}`}>
        <div className={`space-y-6 ${align === "right" ? "lg:order-2" : ""}`}>
          <span className={`inline-block px-4 py-2 rounded-full ${badgeColors[badgeColor]} text-sm font-medium`}>
            {badge}
          </span>
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground">
            {title}
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="space-y-4 pt-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.text}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-foreground font-medium">{feature.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
        <div className={`${align === "right" ? "lg:order-1" : ""}`}>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

const TreeVisualization = () => {
  return (
    <div className="relative h-[400px] lg:h-[500px] glass-card-strong p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-mint/10 via-transparent to-transparent" />
      
      {/* Animated tree branches */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        <defs>
          <linearGradient id="branchGradient" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(var(--mint))" stopOpacity="0.4" />
          </linearGradient>
        </defs>
        
        {/* Main trunk */}
        <motion.path
          d="M200 400 L200 280 Q200 240 180 200 Q160 160 140 140 Q120 120 100 100"
          stroke="url(#branchGradient)"
          strokeWidth="4"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, ease: "easeOut" }}
        />
        <motion.path
          d="M200 280 Q200 260 220 240 Q240 220 260 180 Q280 140 300 100"
          stroke="url(#branchGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.3, ease: "easeOut" }}
        />
        <motion.path
          d="M200 320 Q180 300 160 300 Q120 300 80 280"
          stroke="url(#branchGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
        />
        <motion.path
          d="M200 320 Q220 300 260 300 Q300 300 340 280"
          stroke="url(#branchGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.7, ease: "easeOut" }}
        />
      </svg>

      {/* Nodes */}
      {[
        { x: 100, y: 100, delay: 1.5 },
        { x: 300, y: 100, delay: 1.7 },
        { x: 80, y: 280, delay: 1.9 },
        { x: 340, y: 280, delay: 2.1 },
        { x: 200, y: 180, delay: 2.3 },
      ].map((node, i) => (
        <motion.div
          key={i}
          className="absolute w-16 h-16 rounded-2xl bg-card border border-border shadow-card flex items-center justify-center"
          style={{ left: node.x - 32, top: node.y - 32 }}
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: node.delay, type: "spring" }}
        >
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-soft to-mint-soft" />
        </motion.div>
      ))}
    </div>
  );
};

const CalendarVisualization = () => {
  const events = [
    { name: "День рождения мамы", date: "15 марта", color: "pink" },
    { name: "Годовщина свадьбы", date: "22 июня", color: "gold" },
    { name: "День рождения брата", date: "8 сентября", color: "mint" },
  ];

  return (
    <div className="relative h-[400px] lg:h-[500px] glass-card-strong p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-pink/10 via-transparent to-transparent" />
      
      {/* Calendar grid */}
      <div className="relative z-10 h-full flex flex-col">
        <div className="text-center mb-4">
          <span className="text-2xl font-bold text-foreground">Март 2025</span>
        </div>
        
        <div className="grid grid-cols-7 gap-2 mb-4">
          {["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"].map((day) => (
            <div key={day} className="text-center text-xs text-muted-foreground font-medium py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2 flex-1">
          {[...Array(31)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.02 }}
              className={`relative aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all duration-200 hover:bg-muted/50 cursor-pointer ${
                i + 1 === 15 ? "bg-pink-soft text-secondary-foreground ring-2 ring-pink" : "text-foreground"
              }`}
            >
              {i + 1}
              {i + 1 === 15 && (
                <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-pink animate-pulse" />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating event cards */}
      {events.map((event, i) => (
        <motion.div
          key={event.name}
          initial={{ opacity: 0, x: 50, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
          className={`absolute right-4 glass-card p-3 shadow-lg ${
            i === 0 ? "top-20" : i === 1 ? "top-40" : "top-60"
          }`}
          style={{ zIndex: 20 - i }}
        >
          <div className="flex items-center gap-3">
            <div className={`w-3 h-3 rounded-full ${
              event.color === "pink" ? "bg-pink" : event.color === "gold" ? "bg-gold" : "bg-mint"
            }`} />
            <div>
              <p className="text-sm font-medium text-foreground">{event.name}</p>
              <p className="text-xs text-muted-foreground">{event.date}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

const AISearchVisualization = () => {
  return (
    <div className="relative h-[400px] lg:h-[500px] glass-card-strong p-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-gold/10 via-transparent to-transparent" />
      
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        {/* Upload area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-40 h-40 rounded-3xl border-2 border-dashed border-muted-foreground/30 flex items-center justify-center mb-8 relative"
        >
          <div className="w-28 h-28 rounded-2xl bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
            <Camera className="w-10 h-10 text-muted-foreground" />
          </div>
          
          {/* Scanning animation */}
          <motion.div
            className="absolute inset-0 border-2 border-gold rounded-3xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: [0, 1, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1, repeat: 2 }}
          />
          <motion.div
            className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-gold to-transparent rounded-full"
            initial={{ y: 0 }}
            whileInView={{ y: [0, 160, 0] }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1, repeat: 2 }}
          />
        </motion.div>

        {/* Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 2 }}
          className="flex items-center gap-2 mb-8"
        >
          <Sparkles className="w-5 h-5 text-gold" />
          <span className="text-sm text-muted-foreground">ИИ анализирует...</span>
          <Sparkles className="w-5 h-5 text-gold" />
        </motion.div>

        {/* Results */}
        <div className="flex gap-4">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 2.5 + i * 0.2, type: "spring" }}
              className="glass-card p-3"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-pink-soft to-gold-soft mb-2" />
              <p className="text-xs text-center text-muted-foreground">Совпадение {90 - i * 5}%</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;