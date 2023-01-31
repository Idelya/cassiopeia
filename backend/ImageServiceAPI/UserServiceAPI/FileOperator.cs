namespace ImageServiceAPI
{
    public static class FileOperator
    {
        //https://verbisoft.pl/2020/12/04/iformfile-to-byte-array/
        public static byte[] ExtractFileContent(this IFormFile pgmFile)
        {
            byte[] pgmFileContent = null;
            if (pgmFile?.Length > 0)
            {
                using (var ms = new MemoryStream())
                {
                    pgmFile.CopyTo(ms);
                    pgmFileContent = ms.ToArray();
                }
            }
            return pgmFileContent;
        }
    }
}
