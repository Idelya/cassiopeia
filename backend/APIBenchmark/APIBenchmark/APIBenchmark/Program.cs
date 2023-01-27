using System.Diagnostics;

int requestCount = 0;

void SendRequest(string endpoint)
{
    var httpClientHandler = new HttpClientHandler();
    httpClientHandler.ServerCertificateCustomValidationCallback = (message, cert, chain, sslPolicyErrors) =>
    {
        return true;
    };

    var httpClient = new HttpClient(httpClientHandler);

    Console.WriteLine($"{DateTime.Now.ToString("HH:mm:ss.ffff")} Sending request..");
    var response = httpClient.Send(new HttpRequestMessage(HttpMethod.Get, $"https://localhost:7076/api/auth/{endpoint}"));
    Console.WriteLine($"{DateTime.Now.ToString("HH:mm:ss.ffff")} Response received..");

    if (!response.IsSuccessStatusCode)
        Console.WriteLine(response.StatusCode.ToString());

    Interlocked.Increment(ref requestCount);
}

var expectedRequestCount = 10;

var stopwatch = new Stopwatch();

stopwatch.Start();
Parallel.For(0, expectedRequestCount, i => SendRequest("benchmark"));
stopwatch.Stop();

Console.WriteLine($"Non async elasped time: \t {stopwatch.ElapsedMilliseconds} ms - {requestCount} requests");

requestCount= 0;
stopwatch.Restart();

stopwatch.Start();
Parallel.For(0, expectedRequestCount, i => SendRequest("benchmark-async"));
stopwatch.Stop();

Console.WriteLine($"Async elasped time: \t {stopwatch.ElapsedMilliseconds} ms - {requestCount} requests");

requestCount = 0;
stopwatch.Restart();

stopwatch.Start();
Parallel.For(0, expectedRequestCount, i => SendRequest("benchmark-async"));
stopwatch.Stop();

Console.WriteLine($"Sleep elasped time: \t {stopwatch.ElapsedMilliseconds} ms - {requestCount} requests");


Console.WriteLine($"Expected sequential time: {10_000 * expectedRequestCount}");

requestCount = 0;
stopwatch.Restart();

stopwatch.Start();
Parallel.For(0, expectedRequestCount, i => SendRequest("compute-benchmark"));
stopwatch.Stop();

Console.WriteLine($"Performance elasped time: \t {stopwatch.ElapsedMilliseconds} ms - {requestCount} requests");