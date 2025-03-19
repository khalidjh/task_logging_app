import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Create default categories
  const defaultCategories = [
    { name: 'Work', color: '#EF4444' }, // Red
    { name: 'Personal', color: '#3B82F6' }, // Blue
    { name: 'Shopping', color: '#10B981' }, // Green
    { name: 'Health', color: '#F59E0B' }, // Amber
    { name: 'Education', color: '#8B5CF6' }, // Purple
  ];

  console.log('Seeding default categories...');

  for (const category of defaultCategories) {
    await prisma.category.upsert({
      where: { id: category.name },
      update: {},
      create: {
        id: category.name,
        name: category.name,
        color: category.color,
      },
    });
  }

  console.log('Seeding completed.');
}

main()
  .catch((e) => {
    console.error('Error seeding the database:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 