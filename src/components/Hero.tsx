import { motion } from "framer-motion";
import { TreeDeciduous, Bell, Scan, Lightbulb } from "lucide-react";
import { Button } from "./ui/button";
import FamilyTree3D from "./FamilyTree3D";

const features = [
  {
    icon: TreeDeciduous,
    title: "Живое древо",
    description: "Интерактивная визуализация истории вашей семьи",
    gradient: "from-mint to-mint-soft",
    delay: 0.2,
  },
  {
    icon: Bell,
    title: "Умные напоминания",
    description: "Никогда не забудешь важные семейные даты",
    gradient: "from-pink to-pink-soft",
    delay: 0.4,
  },
  {
    icon: Scan,
    title: "Семейный фотограф",
    description: "Невероятные возможности с фото",
    gradient: "from-gold to-gold-soft",
    delay: 0.5,
  },
  {
    icon: Lightbulb,
    title: "Генератор идей",
    description: "Идеи для праздников и подарков",
    gradient: "from-indigo to-primary",
    delay: 0.6,
  },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-hero-pattern">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-pink/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute -bottom-1/2 -left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-radial from-mint/20 via-transparent to-transparent blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-gradient-radial from-gold/10 via-transparent to-transparent blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-4 pt-24 pb-16 lg:pt-32 lg:pb-24">
        {/* Header */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed top-0 left-0 right-0 z-50 px-4 py-4"
        >
          <div className="container mx-auto">
            <div className="glass-card px-6 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-indigo-light flex items-center justify-center">
                  <TreeDeciduous className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-bold text-foreground">Родные Связи</span>
              </div>
              <div className="hidden md:flex items-center gap-8">
                <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Возможности</a>
                <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Как работает</a>
                <a href="#pricing" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Тарифы</a>
              </div>
              <Button size="sm" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
                Начать бесплатно
              </Button>
            </div>
          </div>
        </motion.nav>

        {/* Main hero content */}
        <div className="pt-20 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-secondary-foreground/10">
                <span className="w-2 h-2 rounded-full bg-mint animate-pulse" />
                <span className="text-sm font-medium text-secondary-foreground">Новое поколение генеалогии</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight">
                <span className="gradient-text-accent">Мгновения</span>
                <br />
                <span className="text-foreground">твоей жизни</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed">
                Генеалогическое древо • Напоминания о важных датах • Поиск родных по фотографии с помощью ИИ
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl shadow-primary/25 px-8 py-6 text-lg font-semibold glow-effect">
                Создать древо
              </Button>
              <Button size="lg" variant="outline" className="border-border/50 hover:bg-muted/50 px-8 py-6 text-lg font-semibold backdrop-blur-sm">
                Посмотреть демо
              </Button>
            </motion.div>

            {/* Social proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-center gap-6 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full border-2 border-background bg-gradient-to-br from-pink-soft to-mint-soft flex items-center justify-center text-xs font-bold text-primary"
                  >
                    {["А", "М", "И", "К", "Л"][i - 1]}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">12,000+</span>
                <span className="text-muted-foreground"> семей уже с нами</span>
              </div>
            </motion.div>
          </div>

          {/* 3D Tree visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative h-[400px] lg:h-[600px]"
          >
            <FamilyTree3D />
          </motion.div>
        </div>

        {/* Feature cards */}
        <div className="mt-16 lg:mt-24 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: feature.delay + 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group"
            >
              <div className="glass-card-strong p-6 h-full cursor-pointer transition-all duration-300 hover:shadow-glow">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
        >
          <div className="w-1.5 h-3 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;