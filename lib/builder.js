import { Builder } from '@builder.io/sdk';

const builderApiKey = process.env.NEXT_PUBLIC_BUILDER_API_KEY;

if (builderApiKey) {
  Builder.init(builderApiKey);
}

export async function getBuilderPage(path) {
  if (!builderApiKey) {
    console.warn('Builder API key not configured');
    return null;
  }

  try {
    const page = await Builder.get('page', {
      url: path,
    }).promise();

    return page;
  } catch (error) {
    console.error('Error fetching Builder page:', error);
    return null;
  }
}

export async function getAllBuilderPages() {
  if (!builderApiKey) {
    return [];
  }

  try {
    const pages = await Builder.getAll('page', {
      limit: 100,
    });

    return pages || [];
  } catch (error) {
    console.error('Error fetching Builder pages:', error);
    return [];
  }
}
