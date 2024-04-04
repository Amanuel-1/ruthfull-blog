export function extractTweetId(url: string): string | null {
    const regex = /\/status\/(\d+)/;
    const match = regex.exec(url);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }
  
  