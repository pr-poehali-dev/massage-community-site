import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-blue-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-green-500 rounded-xl flex items-center justify-center">
                <Icon name="Heart" className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-800">МассажПро</h1>
                <p className="text-sm text-slate-600">Сообщество практиков</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#home" className="text-slate-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#about" className="text-slate-700 hover:text-blue-600 transition-colors">О сообществе</a>
              <a href="#beginners" className="text-slate-700 hover:text-blue-600 transition-colors">Новичкам</a>
              <a href="#experts" className="text-slate-700 hover:text-blue-600 transition-colors">Опытным</a>
              <a href="#instructions" className="text-slate-700 hover:text-blue-600 transition-colors">Инструкции</a>
              <a href="#theory" className="text-slate-700 hover:text-blue-600 transition-colors">Теория</a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              <Icon name="Users" size={16} className="mr-2" />
              Присоединиться
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-green-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">
              Профессиональное сообщество 
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                массажистов
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              Обучение, развитие, сертификация и обмен опытом для практикующих специалистов
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Начать обучение
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                <Icon name="Users" size={20} className="mr-2" />
                Найти коллег
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">2,500+</div>
              <p className="text-slate-600">Участников сообщества</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">150+</div>
              <p className="text-slate-600">Обучающих программ</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">45+</div>
              <p className="text-slate-600">Техник массажа</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">1,200+</div>
              <p className="text-slate-600">Сертификатов выдано</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">О нашем сообществе</h2>
            <p className="text-xl text-slate-600">
              Мы объединяем профессиональных массажистов для обмена знаниями, 
              повышения квалификации и развития индустрии
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="GraduationCap" className="text-blue-600" size={24} />
                </div>
                <CardTitle>Обучение</CardTitle>
                <CardDescription>
                  Структурированные программы от базового до экспертного уровня
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" className="text-green-600" size={24} />
                </div>
                <CardTitle>Сертификация</CardTitle>
                <CardDescription>
                  Официальные сертификаты и подтверждение квалификации
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="MessageCircle" className="text-purple-600" size={24} />
                </div>
                <CardTitle>Сообщество</CardTitle>
                <CardDescription>
                  Форум для обмена опытом и профессионального общения
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Образовательные пути</h2>
          </div>

          <Tabs defaultValue="beginners" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="beginners" className="text-lg">
                <Icon name="Sprout" size={20} className="mr-2" />
                Для новичков
              </TabsTrigger>
              <TabsTrigger value="experts" className="text-lg">
                <Icon name="Crown" size={20} className="mr-2" />
                Для опытных
              </TabsTrigger>
            </TabsList>

            <TabsContent value="beginners" id="beginners">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-green-100 text-green-700">Базовый курс</Badge>
                    <CardTitle>Основы классического массажа</CardTitle>
                    <CardDescription>
                      40 часов теории и практики для начинающих специалистов
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Clock" size={16} className="mr-2" />
                        40 академических часов
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Users" size={16} className="mr-2" />
                        До 12 человек в группе
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Certificate" size={16} className="mr-2" />
                        Сертификат об окончании
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-green-600 hover:bg-green-700">
                      Записаться на курс
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-blue-100 text-blue-700">Практикум</Badge>
                    <CardTitle>Анатомия и физиология</CardTitle>
                    <CardDescription>
                      Фундаментальные знания о строении человеческого тела
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Clock" size={16} className="mr-2" />
                        24 академических часа
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="BookOpen" size={16} className="mr-2" />
                        Интерактивные материалы
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Target" size={16} className="mr-2" />
                        Практические занятия
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-blue-600 hover:bg-blue-700">
                      Начать изучение
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="experts" id="experts">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-purple-100 text-purple-700">Экспертный</Badge>
                    <CardTitle>Глубокотканный массаж</CardTitle>
                    <CardDescription>
                      Продвинутые техники работы с глубокими слоями мышц
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Clock" size={16} className="mr-2" />
                        60 академических часов
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Award" size={16} className="mr-2" />
                        Международный сертификат
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Users" size={16} className="mr-2" />
                        Менторство
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                      Подать заявку
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge className="w-fit mb-2 bg-orange-100 text-orange-700">Мастер-класс</Badge>
                    <CardTitle>Спортивный массаж</CardTitle>
                    <CardDescription>
                      Специализированные методики для работы со спортсменами
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Clock" size={16} className="mr-2" />
                        48 академических часов
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Zap" size={16} className="mr-2" />
                        Интенсивный формат
                      </div>
                      <div className="flex items-center text-sm text-slate-600">
                        <Icon name="Trophy" size={16} className="mr-2" />
                        Специализация
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-orange-600 hover:bg-orange-700">
                      Записаться
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Instructions & Theory */}
      <section id="instructions" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Instructions */}
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                <Icon name="FileText" size={32} className="inline mr-3 text-blue-600" />
                Инструкции и методики
              </h2>
              
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="protocols">
                  <AccordionTrigger className="text-left hover:text-blue-600">
                    Протоколы безопасности
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-600 mb-4">
                      Стандартные процедуры обеспечения безопасности во время сеансов массажа.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Санитарно-гигиенические требования</li>
                      <li>• Противопоказания и ограничения</li>
                      <li>• Экстренные ситуации и первая помощь</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="techniques">
                  <AccordionTrigger className="text-left hover:text-blue-600">
                    Базовые техники массажа
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-600 mb-4">
                      Пошаговые инструкции для выполнения основных приемов.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Поглаживание и растирание</li>
                      <li>• Разминание и вибрация</li>
                      <li>• Ударные приемы</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="equipment">
                  <AccordionTrigger className="text-left hover:text-blue-600">
                    Оборудование и материалы
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="text-slate-600 mb-4">
                      Рекомендации по выбору и использованию профессионального оборудования.
                    </p>
                    <ul className="space-y-2 text-sm text-slate-700">
                      <li>• Массажные столы и кушетки</li>
                      <li>• Масла и кремы</li>
                      <li>• Дополнительные аксессуары</li>
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>

            {/* Theory */}
            <div id="theory">
              <h2 className="text-3xl font-bold text-slate-800 mb-8">
                <Icon name="Brain" size={32} className="inline mr-3 text-green-600" />
                Теоретическая база
              </h2>
              
              <div className="space-y-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Layers" size={20} className="mr-2 text-blue-600" />
                      Анатомия и физиология
                    </CardTitle>
                    <CardDescription>
                      Строение человеческого тела и принципы работы систем организма
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Изучить материалы
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Zap" size={20} className="mr-2 text-purple-600" />
                      Биомеханика движения
                    </CardTitle>
                    <CardDescription>
                      Принципы работы опорно-двигательного аппарата
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Изучить материалы
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Icon name="Heart" size={20} className="mr-2 text-red-600" />
                      Психология клиента
                    </CardTitle>
                    <CardDescription>
                      Работа с клиентами и построение доверительных отношений
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      <Icon name="BookOpen" size={16} className="mr-2" />
                      Изучить материалы
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Возможности сообщества</h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Мы предоставляем все необходимые инструменты для профессионального роста
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" className="text-white" size={28} />
                </div>
                <CardTitle>Поиск коллег</CardTitle>
                <CardDescription>
                  Находите специалистов в вашем регионе для сотрудничества
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="Calendar" className="text-white" size={28} />
                </div>
                <CardTitle>События и мастер-классы</CardTitle>
                <CardDescription>
                  Календарь профессиональных мероприятий и обучающих семинаров
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Icon name="MessageSquare" className="text-white" size={28} />
                </div>
                <CardTitle>Форум сообщества</CardTitle>
                <CardDescription>
                  Обсуждение случаев, обмен опытом и профессиональные консультации
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-green-500 rounded-lg flex items-center justify-center">
                  <Icon name="Heart" className="text-white" size={20} />
                </div>
                <span className="text-xl font-bold">МассажПро</span>
              </div>
              <p className="text-slate-300 text-sm">
                Профессиональное сообщество массажистов для обучения и развития
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Обучение</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Курсы для новичков</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Продвинутые техники</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Сертификация</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Сообщество</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li><a href="#" className="hover:text-white transition-colors">Форум</a></li>
                <li><a href="#" className="hover:text-white transition-colors">События</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Поиск коллег</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-slate-300">
                <li>info@massagepro.ru</li>
                <li>+7 (495) 123-45-67</li>
                <li>Москва, ул. Примерная, 1</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-700 mt-8 pt-8 text-center">
            <p className="text-slate-400 text-sm">
              © 2024 МассажПро. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;