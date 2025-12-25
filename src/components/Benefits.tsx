import { motion } from "framer-motion";
import { Shield, Cpu, Palette, Smartphone, Users, Cloud } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Приватность и защита",
    description: "Все данные зашифрованы. Вы полностью контролируете, кто видит вашу информацию.",
    gradient: "from-indigo to-indigo-light",
  },
  {
    icon: Cpu,
    title: "Современный ИИ",
    description: "Нейросети последнего поколения для поиска и анализа семейных связей.",
    gradient: "from-mint to-mint-soft",
  },
  {
    icon: Palette,
    title: "Красивый интерфейс",
    description: "Интуитивный и стильный дизайн, в который влюбляешься с первого взгляда.",
    gradient: "from-pink to-pink-soft",
  },
  {
    icon: Smartphone,
    title: "Мобильная версия",
    description: "Полноценный доступ с любого устройства. PWA для быстрого запуска.",
    gradient: "from-gold to-gold-soft",
  },
  {
    icon: Users,
    title: "Совместная работа",
    description: "Приглашайте родственников для совместного создания семейного древа.",
    gradient: "from-indigo-light to-primary",
  },
  {
    icon: Cloud,
    title: "Облачное хранение",
    description: "Надёжное хранение в облаке с автоматическим резервным копированием.",
    gradient: "from-mint-soft to-accent",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-radial from-pink/10 via-transparent to-transparent blur-3xl" />
      <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-gradient-radial from-mint/10 via-transparent to-transparent blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-24"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-gold-soft text-foreground text-sm font-medium mb-4">
            Почему мы
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-4">
            Создано с <span className="gradient-text-accent">любовью к семьям</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Мы заботимся о каждой детали, чтобы ваш опыт был незабываемым
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3 }}
                className="glass-card-strong p-6 lg:p-8 h-full group cursor-pointer"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${benefit.gradient} flex items-center justify-center mb-5`}
                >
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </motion.div>

                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;